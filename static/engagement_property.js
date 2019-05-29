/**
 * Engagement Property top-level application view and model
 *
 * Requires:
 *   - common.js
 *   - common_bb.js
 *   - property.js
 *   - appraisals.js
 *   - scheduled_assignments.js
 *   - cocktail
 *
 *   - npv.settings:
 *     - enagement_site_url
 *
 *   - Elements:
 *     - #Content
 *     - #SaveBtn
 *     - #BackBtn
 *     - #Office
 *     - #ClientId1
 *     - #ClientId2
 */

var npv = npv || {};

(function($) {

    'use strict';


    function saveIfDirty(item, attrs, options) {
        if (!item.isDirty()) {
            return $.Deferred().resolve();
        }
        return item.save(attrs, options);
    }


    npv.EngagementProperty = Backbone.Model.extend({
        url: function() {
            return this.get('resource_uri');
        }
    });

    Cocktail.mixin(npv.EngagementProperty, npv.IsDirtyModelMixin);


    npv.EngagementPropertyApp = Backbone.View.extend({

        el: '#Content',

        events: {
            'click #SaveBtn': 'saveClick',

            'change input.clientId': 'clientIdChanged',
            'change #Office': 'officeChanged'
        },

        /**
         * All of the below are JSON or lists set via the Django template.
         *
         * @param options.engagement_property
         * @param options.property
         * @param options.addresses
         * @param options.schedule (indirectly)
         * @param options.scheduled_appraisals (indirectly)
         * @param options.existing_appraisals (indirectly)
         * @param options.employees
         * @param options.scheduled_assignments
         */
        initialize: function(options) {
            this.$save = this.$('#SaveBtn');

            // TODO: move to <a href> in template
            this.$('#BackBtn').on('click', function() {
                window.location = npv.settings.engagement_site_url;
            });

            /* EngagementProperty */
            this.engagement_property = new npv.EngagementProperty(
                options.engagement_property
            );
            options.engagement_property = this.engagement_property;
            this.$job_number_label = this.$('.job-number');
            this.$office = this.$('#Office');
            this.$client_id1 = this.$('#ClientId1');
            this.$client_id2 = this.$('#ClientId2');
            this.listenTo(this.engagement_property, 'change',
                          this.refreshSaveButton);

            /* Property */
            this.property_view = new npv.PropertyView(options.property);
            this.property = this.property_view.model;
            this.listenTo(this.property, 'change', this.refreshSaveButton);

            /* Addresses */
            this.addresses_view = new npv.AddressListView(options.addresses);
            this.addresses = this.addresses_view.addresses;
            this.listenTo(this.addresses, 'change', this.refreshSaveButton);
            this.listenTo(this.addresses, 'add', this.refreshSaveButton);
            // TODO: remove

            /* Schedule (AOS) & Appraisals */
            this.schedule_view = new npv.AppraisalScheduleView(options);
            this.schedule = this.schedule_view.model;
            this.listenTo(this.schedule, 'change', this.refreshSaveButton);
            this.all_appraisals = this.schedule_view.all_appraisals;
            this.listenTo(this.all_appraisals, 'change',
                          this.refreshSaveButton);
            // Update the job-number label displayed in all sections with
            // the base job-number as set by all_appraisals.
            var that = this;
            this.listenTo(this.all_appraisals, 'change:baseJobNumber',
                          function(base_job_number) {
                              that.$job_number_label.text(base_job_number);
                          });
            this.$job_number_label.text(this.all_appraisals.base_job_number);

            /* Assignments */
            this.assignments_view = new npv.ScheduledAssignmentsView(
                options.employees,
                options.scheduled_assignments
            );
            this.assignments_view.listenTo(
                this, 'officeChanged',
                this.assignments_view.officeChanged
            );
            this.assignments = this.assignments_view.assignments;
            this.listenTo(this.assignments, 'change', this.refreshSaveButton);
            this.listenTo(this.assignments, 'add', this.refreshSaveButton);
            this.listenTo(this.assignments, 'remove', this.refreshSaveButton);

            this.saveables = [
                this.engagement_property,
                this.property,
                this.addresses,
                this.schedule,
                this.all_appraisals,
                this.assignments
            ];
        },

        render: function() {
            this.addresses_view.render();
            this.assignments_view.render();
        },

        /** EngagementProperty.office */
        officeChanged: function(evt) {
            var $option = $(evt.target).find('option:selected');
            this.engagement_property.set('office', $option.val());
            // TODO: This is the only place we pass an element as an event arg,
            //       clean up.
            this.trigger('officeChanged', $option);
        },

        /** EngagementProperty.client_provided_id1 & 2 */
        clientIdChanged: function() {
            this.engagement_property.set('client_provided_id1',
                                         handle_empty(this.$client_id1.val()));
            this.engagement_property.set('client_provided_id2',
                                         handle_empty(this.$client_id2.val()));
        },

        isDirty: function() {
            return _.any(this.saveables, function(item) {
                return item.isDirty();
            });
        },

        isValid: function() {
            // TODO: Indicate the tab with the invalid data, either here or
            //       trigger the event here that sets the indicator elsewhere.
            return _.every(this.saveables, function(item) {
                return (item.isDirty()) ? item.isValid() : true;
            });
        },

        enableSaveButton: function() {
            // setTimeout use is to work around bootstrap oddity where reset
            // re-enables the button adding a slight delay ensures reset
            // finishes first (hopefully).
            var that = this;
            setTimeout(function () {
                that.$save.addClass('btn-success').prop('disabled', false);
            }, 0);
        },

        disableSaveButton: function() {
            var that = this;
            setTimeout(function () {
                that.$save.removeClass('btn-success').prop('disabled', true);
            }, 0);
        },

        refreshSaveButton: function(reset) {
            if (reset) {
                this.$save.button('reset');
            }
            // TODO: indicate dirty but invalid state on button and tab
            if (this.isDirty() && this.isValid()) {
                this.enableSaveButton();
            } else {
                this.disableSaveButton();
            }
        },

        save: function() {
            if (!this.isDirty()) {
                return $.Deferred().resolve();
            }
            var that = this;
            return $.when(
                saveIfDirty(this.engagement_property),
                this.property.save(),
                this.addresses.save(),
                saveIfDirty(this.schedule),
                this.all_appraisals.save()
                // Prevent race condition where assignments are saved be a new
                // current active appraisal is saved which prevents the
                // automatic sync of scheduled->active-assignments.
            ).then(function() { that.assignments.save(); });
        },

        saveClick: function(event) {
            event.stopPropagation();

            this.$save.button('loading');
            NPVNexus.Status.loading();
            var that = this;
            // TODO: move to that.refreshSaveButton(true)
            this.save().then(function () {
                that.$save.button('reset');
                NPVNexus.Status.success();
                that.disableSaveButton();
            }, function () {
                that.$save.button('reset');
                NPVNexus.Status.error();
                that.enableSaveButton();
            });
        }

        // TODO: tab-stuff?
    });

})(jQuery);

