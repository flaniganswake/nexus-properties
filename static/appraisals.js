/**
 * Engagement Property, Scheduled, Historical, Active Appraisals management
 *
 * Requires:
 *   - common.js
 *   - common_bb.js
 *   - cocktail
 *   - moment
 *
 *   - npv.<occurrence_type> constants
 *   - npv.settings:
 *     - engagement_property_uri
 *     - engagement_uri
 *     - property_uri
 *     - aos_uri
 *     - scheduled_appraisals_uri
 *     - scheduled_appraisals_base_uri
 *     - appraisals_base_uri
 *     - appraisal_activation_window object with unit & amount fields
 *     - job_number_middle
 *
 *   - #sched-form element
 *   - #sched-table element
 *   - #sched-table-cell-template Underscore template
 *   - #sched-table-row-template Underscore template
 */

// XXX:
// o current-active assignments
// o listen-once for replace-model?
// o update current-active job-number on occurrence change?
//
// TODO:
// o double check empty case (figure out why repeats-select is not blank)
// o Abstract npv.enable_save calls, in particular move out of data layer
// o make AOS form more compact, perhaps two colums of inputs?
// o unit tests
// o detect weekend, holiday, ..., do right thing to due-date
// o editable dates for individual scheduled-appraisals
// o keyboard-nav editing for initial-due-date broken
// o update aos initial-fee if first appraisal fee is changed
//
// FUTURE: (maybe)
// ? validate values in case where JS was circumvented, e.g. past
//   initial-due-date, non-numeric perhaps?
// ? move aos-view from being element id based?


var npv = npv || {};

(function ($) {

    'use strict';

    npv.Appraisal = Backbone.Model.extend({
        appraisalType: 'existing',

        url: function() {
            if (this.get('resource_uri')) {
                return this.get('resource_uri');
            }
            return npv.settings.appraisals_base_uri;
        },

        isActive: function() {
            var now = moment();
            var due = moment(this.get('due_date'));
            return now.year() == due.year() && now.quarter() == due.quarter();
        },

        jobNumber: function() {
            return this.get('job_number');
        }
    });

    Cocktail.mixin(npv.Appraisal, npv.IsDirtyModelMixin);


    npv.ScheduledAppraisal = Backbone.Model.extend({
        appraisalType: 'scheduled',

        defaults: {
            engagement_property: npv.settings.engagement_property_uri,
            restricted: false,
            due_date: null,
            fee: "0.00" // TODO: null better here?
        },

        initialize: function(attrs, options) {
            this.collection = options.collection;
            // TODO: hunt down where options has an undefined schedule
            if (!options.schedule) {
                this.schedule = options.collection.schedule;
            } else {
                this.schedule = options.schedule;
            }
        },

        url: function() {
            if (this.get('resource_uri')) {
                return this.get('resource_uri');
            }
            return npv.settings.scheduled_appraisals_uri;
        },

        isActive: function() {
            var now = moment();
            var due = moment(this.get('due_date'));
            return (now.year() === due.year() &&
                    now.quarter() === due.quarter());
        },

        jobNumber: function() {
            var due = moment(this.get('due_date'));

            var jn = due.format('YY') + '-' + npv.settings.job_number_middle;

            if (this.schedule.get('occurrence_type') == npv.ANNUALLY) {
                // QQQ: +1 here?
                jn += '-A' + (this.collection.indexOf(this) + 1);
            } else {
                jn += '-Q' + due.quarter();
            }
            return jn;
        }
    });

    Cocktail.mixin(npv.ScheduledAppraisal, npv.IsDirtyModelMixin);


    // TODO: Remove need for a shadowed scheduled-collection managed by the
    //       all-collection.
    npv.ScheduledAppraisals = Backbone.Collection.extend({
        model: npv.ScheduledAppraisal,

        comparator: 'due_date',

        toDelete: [],

        url: function() {
            return npv.settings.scheduled_appraisals_uri;
        },

        bulkURL: function() {
            return npv.settings.scheduled_appraisals_base_uri;
        },

        // TODO: This a candidate for BulkCollectionMixin.
        queueDeleteAll: function() {
            var that = this;
            this.each(function(appr) { that.markForDelete(appr); });
            this.reset(null, {silent: true});
        }
    });

    Cocktail.mixin(npv.ScheduledAppraisals, npv.IsDirtyCollectionMixin,
                   npv.BulkCollectionMixin);


    /** An empty never-dirty object implementing IsDirtyModelMixin */
    var NoOpModel =  {
        isDirty: function() {
            return false;
        }
    };


    npv.AllAppraisals = Backbone.Collection.extend({

        comparator: 'due_date',

        staleCurrent: null,

        scheduled_appraisals: new npv.ScheduledAppraisals(),

        model: function(attrs, options) {
            options || (options = {});
            options.collection || (options.collection = this);
            options.schedule = this.schedule;
            if (attrs.status && attrs.status !== 'SCHEDULED') {
                return new npv.Appraisal(attrs, options);
            } else {
                return new npv.ScheduledAppraisal(attrs, options);
            }
        },

        initialize: function(undefined, options) {
            this.schedule = options.schedule;
            this.listenTo(this.schedule, 'change',
                          this.checkCurrentAgainstAos);

            // when sched bulk save completes we want the new models here too
            this.listenTo(this.scheduled_appraisals, 'reset',
                          this.resetScheduled);

            this.office = options.engagement_property.get('office');
            var that = this;
            this.listenTo(options.engagement_property, 'change:office',
                          function(undefined, office) {
                              that.office = office;
                          });

            // events to keep scheduled_appraisals in sync

            this.on('add', function(models, options) {
                options || (options = {});
                if (!options.silent) {
                    models = _.isArray(models) ? models.slice() : [models];
                    var that = this;
                    _.each(models, function(appr) {
                        if (appr.appraisalType == 'scheduled') {
                            that.scheduled_appraisals.add(appr);
                        }
                    });
                }
                this.updateBaseJobNumber();
            });

            this.on('remove', function(models, options) {
                options || (options = {});
                if (!options.silent) {
                    models = _.isArray(models) ? models.slice() : [models];
                    var that = this;
                    _.each(models, function(appr) {
                        if (appr.appraisalType == 'scheduled') {
                            // TODO: should bulk-mixin do this for you?
                            that.scheduled_appraisals.markForDelete(appr);
                            that.scheduled_appraisals.remove(appr);
                        }
                    });
                }
                this.updateBaseJobNumber();
            });
        },

        /**
         * Sets up the internal scheduled-appraisals collection.
         *
         * NOTE: There is no post initialized event so this must be called
         *       manually.
         */
        postInitialize: function() {
            this.scheduled_appraisals.add(this.scheduled(), { silent: true });
            this.updateBaseJobNumber();
        },

        /**
         * Update this.base_job_number with the share job number part.
         *
         * If there is one appraisal use the full job number otherwise use
         * the job-number-middle as defined in npv.settings.
         *
         * This can be used to display as much of the job number as possible
         * everywhere on the page, instead of just in the schedule table.
         */
        updateBaseJobNumber: function() {
            var prev_jn = this.base_job_number;
            if (this.length === 1) {
                this.base_job_number = this.at(0).jobNumber();
            } else {
                this.base_job_number = npv.settings.job_number_middle;
            }
            if (this.base_job_number !== prev_jn) {
                this.trigger('change:baseJobNumber', this.base_job_number);
            }
            return this;
        },

        /**
         * Upon AOS change, check for existing current to delete or update.
         */
        checkCurrentAgainstAos: function(aos) {
            var cur = this.currentActive();
            if (cur) {
                var aos_due = moment(aos.get('initial_due_date'));
                var cur_due = moment(cur.get('due_date'));
                if (aos_due.quarter() !== cur_due.quarter() ||
                    aos_due.year() !== cur_due.year()) {
                    if (!cur.isNew()) {
                        // mark for delete in next call to save()
                        this.staleCurrent = cur;
                    }
                    this.remove(cur);
                } else if (aos_due.quarter() === cur_due.quarter() &&
                           aos_due.year() === cur_due.year()) {
                    // if aos.initial is current, update to aos.initial_fee
                    cur.set('fee', aos.get('initial_fee'));
                    cur.set('report_type', aos.get('report_type'));
                }
            }
        },

        existing: function() {
            return this.filter(function(appr) {
                return appr.appraisalType === 'existing';
            });
        },

        scheduled: function() {
            return this.filter(function(appr) {
                return appr.appraisalType === 'scheduled';
            });
        },

        removeScheduled: function() {
            this.remove(this.scheduled());
        },

        resetScheduled: function() {
            this.remove(this.scheduled(), { silent: true });
            var options = {
                silent: true,
                collection: this,
                schedule: this.schedule
            };
            this.add(this.scheduled_appraisals.models, options);
        },

        currentActive: function(wrap_none) {
            var now = moment();
            // end date of the appraisal activation window
            var active_window_end = now.add(
                npv.settings.appraisal_activation_window.unit,
                npv.settings.appraisal_activation_window.amount
            );
            var found = this.find(function(appr) {
                var due = moment(appr.get('due_date'));

                // current quarter is always active
                if (due.year() === now.year() &&
                    due.quarter() === now.quarter()) {
                    return true;
                }
                // within activation window, cross year quarter boundries
                return !due.isAfter(active_window_end);
            });
            wrap_none = (wrap_none) ? NoOpModel : found;
            return found || wrap_none;
        },

        existingForQuarter: function(quarter, year) {
            return this.find(function(appr) {
                if (appr.appraisalType !== 'existing') {
                    return false;
                }
                var due = moment(appr.get('due_date'));
                return due.year() === year && due.quarter() === quarter;
            });
        },

        isValid: function() {
            return this.every(function(item) { return item.isValid(); });
        },

        isDirty: function() {
            return (this.currentActive(true).isDirty() ||
                    this.scheduled_appraisals.isDirty());
        },

        save: function() {
            // TODO: use deferred chain
            var cur = this.currentActive(true);
            var xhr;
            if (cur.isDirty()) {
                if (cur.appraisalType === 'scheduled') {
                    var sched_cur = cur;
                    // remove old scheduled version
                    var job_number = cur.jobNumber();
                    this.remove(cur);
                    // create existing version from scheduled version attrs
                    cur = new npv.Appraisal({
                        engagement_property: cur.get('engagement_property'),
                        office: this.office,
                        fee: cur.get('fee'),
                        due_date: cur.get('due_date'),
                        restricted: cur.get('restricted'),
                        job_number: job_number,
                        report_type: this.schedule.get('report_type'),
                        assignments: []
                    });
                    // tell the view that used the scheduled to use the active
                    sched_cur.trigger('replace', cur);
                    this.add(cur);
                }
                cur.set('office', this.office);
                xhr = cur.save();
            }
            if (this.staleCurrent) {
                var that = this;
                this.staleCurrent.destroy().complete(function() {
                    that.staleCurrent = null;
                });
            }
            xhr = xhr || $.Deferred().resolve();
            var that = this;
            return xhr.then(function() { that.scheduled_appraisals.save(); });
        },

        fillMissingFromSchedule: function(aos) {
            if (!aos.isValid()) {
                return;
            }

            // XXX: deal with aos.init-due != existing[0].due (in view)
            var due = moment(aos.get('initial_due_date'));
            // if (this.existing().length > 0) {
            //     due = moment(this.at(0).get('due_date'));
            // }

            // the initial scheduled-appraisal
            if (this.existing().length === 0) {
                this.add({
                    engagement_property: npv.settings.engagement_property_uri,
                    due_date: due.format('YYYY-MM-DD'),
                    fee: aos.get('initial_fee'),
                    restricted: false
                }, { schedule: this.schedule, collection: this });
            }

            // months to increment by according to the occurence_type
            var repeats = aos.get('occurrence_type');
            var incr;
            if (repeats === npv.ANNUALLY) {
                incr = 12;
            } else if (repeats === npv.SEMIANNUALLY) {
                incr = 6;
            } else if (repeats === npv.QUARTERLY) {
                incr = 3;
            }

            var cur = this.currentActive();
            if (cur && cur == this.at(0)) {
                cur.set('fee', aos.get('initial_fee'));
                cur.set('report_type', aos.get('report_type'));
                cur.set('due_date', due.format('YYYY-MM-DD'));
            }

            // add the rest of the appraisals in increments of `incr` months
            for (var m = incr; m < aos.get('years') * 12; m += incr) {
                var appr_due = moment(due).add('months', m);

                // updates are on the same month of following years from the
                // initial due-date and are not restricted
                var restricted = due.month() != appr_due.month();
                var fee_type = (restricted) ? 'quarterly_fee' : 'update_fee';
                var fee = aos.get(fee_type);

                var found = this.existingForQuarter(appr_due.quarter(),
                                                    appr_due.year());
                if (found) {
                    // use some AOS info if we found the current active
                    var report_type = aos.get('report_type');
                    if (found.isActive()) {
                        found.set('fee', fee);
                        found.set('report_type', report_type);
                        found.set('due_date', appr_due.format('YYYY-MM-DD'));
                    }
                } else {
                    var eng_prop_uri = npv.settings.engagement_property_uri;
                    this.add({
                        engagement_property: eng_prop_uri,
                        due_date: appr_due.format('YYYY-MM-DD'),
                        fee: fee,
                        restricted: restricted
                    }, { schedule: this.schedule, collection: this });
                }
            }
            this.trigger('fill');
        },

        groupByYear: function() {
            return this.groupBy(function(appr) {
                var d = new Date(appr.get('due_date'));
                return d.getFullYear();
            });
        }
    });


    /**
     * Represents the AppraisalOccurrenceSchedule Django model (AOS).
     */
    npv.AppraisalSchedule = Backbone.Model.extend({

        defaults: {
            engagement_property: npv.settings.engagement_property_uri,
            occurrence_type: null,
            years: 1,
            initial_fee: null,
            update_fee: null,
            quarterly_fee: null,
            initial_due_date: null
        },

        initialize: function(attrs) {
            if (!this.get('engagement_property')) {
                this.set('engagement_property',
                         npv.settings.engagement_property_uri);
            }
        },

        url: function() {
            return npv.settings.aos_uri;
        },

        validate: function (attrs, options) {
            if (!attrs.occurrence_type || !attrs.years || !attrs.initial_fee ||
                !attrs.initial_due_date) {
                return 'Missing some or all minimum data';
            }
            if (attrs.years > 1 && !attrs.update_fee) {
                return 'Invalid update fee where number of years > 1';
            }
            if (attrs.occurrence_type != 'ANNUALLY' && !attrs.quarterly_fee) {
                return 'Invalid quarterly fee for non-annual occurence';
            }
        }
    });

    Cocktail.mixin(npv.AppraisalSchedule, npv.IsDirtyModelMixin);


    /** Views */

    /**
     * Read-only view for an existing Appraisal in the past (not current).
     */
    npv.HistoricalAppraisalView = Backbone.View.extend({
        tagName: 'div',
        className: 'sched-cell historical',

        template: _.template($('#SchedTableCellTemplate').html()),

        events: {
            'click .view': 'goToAbsoluteURLView'
        },

        goToAbsoluteURLView: function () {
            window.location = this.model.get('absolute_url');
        },

        render: function () {
            var data = this.model.toJSON();
            data.appraisalType = this.model.appraisalType;
            data.active = false;
            this.$el.html(this.template(data));
            return this;
        }
    });

    /**
     * Editable view for scheduled and any current existing appraisals.
     */
    npv.AppraisalView = Backbone.View.extend({

        tagName: 'div',
        className: 'sched-cell',

        template: _.template($('#SchedTableCellTemplate').html()),

        events: {
            'click .restricted': 'toggleRestricted',
            'click .view .fee': 'edit',
            'keypress .edit': 'updateOnEnter',
            'keydown .edit': 'revertOnEscape',
            'blur .edit': 'close'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'change:restricted',
                          this.refreshRestricted);
            this.listenTo(this.model, 'replace', this.replaceModel);
            // TODO: are we leaking without this here?
            // this.listenTo(this.model, 'destroy', this.remove);

        },

        // replacement happens when scheduled becomes current active
        replaceModel: function(replacement) {
            this.model = replacement;
        },

        edit: function (e) {
            this.$el.addClass('editing');
            this.$input.focus();
        },

        close: function () {
            // We don't want to handle blur events from an item that is no
            // longer being edited. Relying on the CSS class here has the
            // benefit of us not having to maintain state in the DOM and the
            // JavaScript logic.
            if (!this.$el.hasClass('editing')) {
                return;
            }

            var value = this.$input.val().trim();
            var fee = parseFloat(value);

            // XXX: is this too many subtle behaviors? the non-update cases:
            //  - if val.trim == '' OR fee == 0: destroy,
            //  - if is-nan(fee): revert (basically no-op w/input value reset)
            //  - if fee == model.fee: no-op

            // TODO: We blindly block deleting for the active but that may not
            //       be the right business logic. I think we can wait for this
            //       to come up in actual usage before addressing, though.
            if ((value === '' || fee === 0) && !this.model.isActive()) {
                this.trigger('remove', this);
                this.remove();
            } else if (isNaN(fee)) {
                this.$input.val(this.model.get('fee'));
            } else {
                this.model.set('fee', fee.toFixed(2));
            }

            this.$el.removeClass('editing');
        },

        // If you hit `enter`, we're through editing the item.
        updateOnEnter: function (e) {
            if (e.which === ENTER_KEY) {
                this.close();
            }
        },

        // If you're pressing `escape` we revert your change by simply leaving
        // the `editing` state.
        revertOnEscape: function (e) {
            if (e.which === ESC_KEY) {
                this.$el.removeClass('editing');
            }
        },

        refreshRestricted: function() {
            var $r = this.$el.find('.restricted');
            $r.text(this.model.get('restricted') ? 'R' : 'A');
        },

        toggleRestricted: function () {
            this.model.set('restricted', !this.model.get('restricted'));
            this.refreshRestricted();
        },

        render: function() {
            var data = this.model.toJSON();
            data.appraisalType = this.model.appraisalType;
            data.active = this.model.isActive();
            data.job_number = this.model.jobNumber();

            this.$el.html(this.template(data));
            this.$input = this.$('input.edit');
            return this;
        }

    });


    /**
     * The (editable) table of scheduled-appraisals.
     *
     * Creates and destroys AppraisalViews as needed.
     */
    npv.ScheduleTable = Backbone.View.extend({

        el: '#SchedTable',

        rowTemplate: _.template($('#SchedTableRowTemplate').html()),

        events: {
            // If we want to support ad-hoc one-off appraisals in the schedule
            // 'click td:empty': 'newAppraisal',
            'click td': 'editAppraisal'
        },

        appraisalViews: [],

        /**
         * @param appraisals_collection ScheduledAppraisals collection instance
         */
        initialize: function(appraisals_collection) {
            this.collection = appraisals_collection;

            this.$empty = this.$el.find('tr.empty-row');
            this.listenTo(this.collection, 'fill', this.render);
        },

        render: function() {
            // destroy any existing appraisal views
            _.each(this.appraisalViews, function (aview, i) {
                aview.remove();
            });
            this.appraisalViews = [];

            // clear out existing and hide or show empty placeholder row
            this.$el.find('tr:not(:first-child)').not(this.$empty).remove();

            if (this.collection.isEmpty()) {
                this.$empty.show();
            } else {
                this.$empty.hide();
            }

            var that = this;
            var grouped = this.collection.groupByYear();
            var prev_year;
            _.each(grouped, function(apprs, year) {
                // empty year rows (should be rare)
                year = parseInt(year);
                if (prev_year && prev_year + 1 < year) {
                    for (var i = 1; i < year - prev_year; i++) {
                        var row = $(that.rowTemplate({year: prev_year + i}));
                        that.$el.append(row);
                    }
                }
                prev_year = year;

                that.$row = $(that.rowTemplate({year: year}));
                _.each(apprs, function(appr) {
                    that.renderAppraisal(appr);
                });
                that.$el.append(that.$row);
            });
            this.$row = null;

            return this;
        },

        // TODO: support ad-hoc adding one-offs to schedule?
        // newAppraisal: function(e) {
        // },

        editAppraisal: function(e) {
            $(e.target).find('.view .fee').trigger('click');
        },

        renderAppraisal: function(appr) {
            var due = moment(appr.get('due_date'));

            var appr_view;
            if (appr.appraisalType === 'scheduled' || appr.isActive()) {
                appr_view = new npv.AppraisalView({ model: appr });
                this.listenTo(appr_view, 'remove', this.removeAppraisalView);
            } else {
                appr_view = new npv.HistoricalAppraisalView({ model: appr });
            }

            var row = this.$row;
            if (!row) {
                row = this.$('tr.' + due.year());
                if (!row.length) {
                    row = $(this.rowTemplate({ year: due.year() }));
                    if (this.collection.indexOf(appr) === 0) {
                        row.insertAfter(this.$el.find('tr.header'));
                        // TODO: empty filler rows as needed
                    } else {
                        this.$el.append(row);
                    }
                }
            }

            var td = row.find('td.Q' + due.quarter());

            // We end up with these addClass calls here as the <TD> is not in
            // the template. It'd be nice to move them there though.

            td.html(appr_view.render().el).addClass(appr.appraisalType);

            if (appr.isActive()) {
                td.addClass('active-appraisal');
            }

            this.appraisalViews.push(appr_view);
        },

        // TODO: can we use this to remove the wonky this.appraisalViews mgmt?
        removeAppraisalView: function(view) {
            this.collection.remove(view.model);
        }

    });


    /**
     * Top-level View handling the appraisal schedule and controling the table.
     *
     * Backed by an AppraisalOccurrenceSchedule (AOS), manipulating/reacting
     * to the AllAppraisals collection. Calls for autofill of this collection
     * as needed (valid AOS changes, empty initial set, ...).
     */
    npv.AppraisalScheduleView = Backbone.View.extend({

        el: '#SchedForm',

        events: {
            'change #SchedRepeats': 'scheduleChanged',
            'change #SchedNumYears': 'scheduleChanged',
            'change #InitialFee': 'scheduleChanged',
            'change #UpdateFee': 'scheduleChanged',
            'change #QuarterlyFee': 'scheduleChanged',
            'change.bfhdatepicker': 'scheduleChanged'
        },

        /**
         * @param options.schedule AppraisalOccurrenceSchedule JSON object.
         * @param options.scheduled_appraisals ScheduledAppraisal JSON objects.
         * @param options.existing_appraisals Appraisal JSON objects.
         */
        initialize: function(options) {
            this.$report_type = this.$('#ReportType');
            this.$repeats = this.$('#SchedRepeats');
            this.$num_years = this.$('#SchedNumYears');
            this.$initial = this.$('#InitialFee');
            this.$update = this.$('#UpdateFee');
            this.$quarterly = this.$('#QuarterlyFee');
            this.$initial_group = this.$('#InitialFeeGroup');
            this.$update_group = this.$('#UpdateFeeGroup');
            this.$quarterly_group = this.$('#QuarterlyFeeGroup');
            this.$due = this.$('#InitialDueDate');

            var sched_appraisals = options.scheduled_appraisals || [];
            var existing_appraisals = options.existing_appraisals || [];

            if (existing_appraisals.length > 1) {
                this.$due.attr('disabled', true);
                this.$initial.attr('disabled', true);
            }

            this.model = new npv.AppraisalSchedule(options.schedule);
            this.updateShownInputs();
            options.schedule = this.model;

            var apprs = existing_appraisals.concat(sched_appraisals);
            this.all_appraisals = new npv.AllAppraisals(apprs, options);
            this.all_appraisals.postInitialize();

            // TODO: fix AOS vs existing differences in the DJ view.
            if (this.all_appraisals.length > 0) {
                var first_existing = this.all_appraisals.at(0);
                this.$initial.val(first_existing.get('fee'));
                this.$due.val(first_existing.get('due_date'));
            }

            this.table = new npv.ScheduleTable(this.all_appraisals);
            this.updateTable();

            this.listenTo(this.model, 'change', this.updateTable);
            this.listenTo(this.model, 'change', this.updateShownInputs);
        },

        /** General handler for any user changes to the AOS. */
        scheduleChanged: function(evt) {
            evt.preventDefault();
            evt.stopImmediatePropagation();
            this.updateAOS();
        },

        /** Read/parse the AOS form inputs and update the model. */
        updateAOS: function() {
            var data = {
                report_type: this.$report_type.val(),
                occurrence_type: this.$repeats.val(),
                years: parseInt(this.$num_years.val()),
                initial_fee: currency_value(this.$initial.val()),
                update_fee: currency_value(this.$update.val()),
                quarterly_fee: currency_value(this.$quarterly.val()),
                initial_due_date: this.$due.val()
            };

            if (data.initial_due_date) {
                var due = moment(data.initial_due_date);
                data.initial_due_date = moment(due).format('YYYY-MM-DD');
            }

            this.model.set(data);

            return this;
        },

        /** Hide and/or show AOS form input controls based on AOS model. */
        updateShownInputs: function(changed_aos) {
            var years = this.model.get('years');
            if (years && years > 1) {
                this.$update_group.show();
            } else {
                this.$update_group.hide();
            }
            var occurrence = this.model.get('occurrence_type');
            if (!occurrence || occurrence == npv.ANNUALLY) {
                this.$quarterly_group.hide();
            } else {
                this.$quarterly_group.show();
            }

            // Only set the required-error indication if not initial display
            if (changed_aos) {
                this.$update_group.toggleClass('has-error',
                                               !this.$update.val());
                this.$quarterly_group.toggleClass('has-error',
                                                  !this.$quarterly.val());
                this.$initial_group.toggleClass('has-error',
                                                !this.$initial.val());
            }

            // use the reformatted massaged value in the inputs
            this.$initial.val(this.model.get('initial_fee'));
            this.$update.val(this.model.get('update_fee'));
            this.$quarterly.val(this.model.get('quarterly_fee'));
        },

        updateTable: function(changed_aos) {

            if (this.model.isValid()) {
                // If `changed_aos` is undefined we can assume we were called
                // directly and not as a an aos:changed model event handler.
                // In the direct call case, most likely initial display, we
                // only want to autofill `npv.appraisers` from the AOS if
                // `npv.appraisers` is empty. This case should be rare, if
                // you managed to get a valid AOS saved you should've also had
                // a populated `npv.appraisers` saved at the same time.
                if (changed_aos || !this.all_appraisals.scheduled().length) {
                    this.all_appraisals.removeScheduled();
                    this.all_appraisals.fillMissingFromSchedule(this.model);
                }

                // On initial page load, render the table explicity, after
                // this render will be triggered by collection reset.
                if (!changed_aos) {
                    this.table.render();
                }
            }

            return this;
        }

    });

})(jQuery);
