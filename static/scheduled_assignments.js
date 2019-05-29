/**
 * Scheduled Role Assignments management
 *
 * Requires:
 *   - common.js
 *   - common_bb.js
 *   - cocktail
 *
 *   - npv.settings:
 *     - scheduled_assignments_uri
 *     - scheduled_assignments_base_uri
 *
 *   - npv:
 *     - role_employees - Employee URI's allowed for each Role
 *
 *   - #Roles element
 */

// TODO:
// o enabled "Select..." employee option for last assn-row (clears any model)
// o currency validation, perhaps auto-reset
// o prune employees from options if already assigned for role, validate dupes


var npv = npv || {};

(function ($) {

    'use strict';


    /* Constants for a role assignment's fee requirement */
    var OPTIONAL = 'optional',
        ALWAYS = 'always',
        NEVER = 'never';

    /* Role definitions (can have multiple, fee requirements, ...) */
    var ROLE = {
        PROCURER: { label: 'Procurer', multiple: false, fee: OPTIONAL },
        MANAGER: { label: 'Manager', multiple: false, fee: OPTIONAL },
        INSPECTOR: { label: 'Inspectors', multiple: true, fee: ALWAYS },
        APPRAISER: { label: 'Appraisers', multiple: true, fee: ALWAYS },
        REVIEWER: { label: 'Reviewers', multiple: true, fee: OPTIONAL },
        PRINCIPAL_SIGNER: { label: 'Principal Signer', multiple: false,
                            fee: NEVER },
        SIGNER: { label: 'Signers', multiple: true, fee: NEVER },
        ASSOCIATE: { label: 'Associates', multiple: true, fee: NEVER },
        RESEARCHER: { label: 'Researchers', multiple: true, fee: NEVER }
    };


    /* Data */


    npv.Employee = Backbone.Model.extend({
        url: function () { return this.get('resource_uri'); }
    });


    npv.Employees = Backbone.Collection.extend({
        model: npv.Employee,

        comparator: 'name',

        roleSubcollection: function (role) {
            return this.subcollection({ filter: function (emp) {
                return _.contains(npv.role_employees[role], emp.url());
            }});
        }

    });


    npv.ScheduledAssignment = Backbone.Model.extend({

        defaults: {
            employee: null,
            fee: null,
            engagement_property: npv.settings.engagement_property_uri
        },

        initialize: function (attrs, options) {
            this.set('engagement_property',
                     npv.settings.engagement_property_uri);
            // TODO: perhaps we should just use options.assignments everywhere
            this.collection = options.collection || options.assignments;
        },

        url: function () {
            return (this.get('resource_uri') ||
                    npv.settings.scheduled_assignments_uri);
        },

        isEmpty: function () {
            return !this.get('employee');
        },

        validate: function (attrs) {
            if (!attrs.employee) {
                return 'No employee selected';
            }
            var role = ROLE[attrs.role];
            if (role.fee == ALWAYS && !attrs.fee) {

                var others = this.collection.filter(function (assn) {
                    return (assn.get('employee') ==
                            attrs.employee && assn.get('fee'));
                });

                if (!others.length) {
                    return 'Role requires fee';
                }
            }
            return null;
        }
    });

    Cocktail.mixin(npv.ScheduledAssignment, npv.IsDirtyModelMixin);


    npv.ScheduledAssignments = Backbone.Collection.extend({

        model: npv.ScheduledAssignment,

        comparator: function (assn1, assn2) {
            var fee1 = assn1.get('fee') || 0;
            var fee2 = assn2.get('fee') || 0;
            return (parseFloat(fee1) > parseFloat(fee2)) ? -1 : 1;
        },

        url: function () {
            return npv.settings.scheduled_assignments_uri;
        },

        bulkURL: function () {
            return npv.settings.scheduled_assignments_base_uri;
        },

        roleSubcollection: function (roleName) {
            return this.subcollection({ filter: function (assn) {
                return assn.get('role') === roleName;
            }});
        }

    });

    Cocktail.mixin(npv.ScheduledAssignments, npv.IsDirtyCollectionMixin,
                   npv.BulkCollectionMixin);


    /* Views */


    /* The order of display of the role view sections */
    var roles_order = ['PROCURER', 'MANAGER', 'INSPECTOR', 'APPRAISER',
                       'REVIEWER', 'PRINCIPAL_SIGNER', 'SIGNER', 'ASSOCIATE',
                       'RESEARCHER'];


    /**
     * A single assignment view with employee selection and possibly fee.
     */
    npv.ScheduledAssignmentView = Backbone.View.extend({
        tagName: 'div',
        className: 'row assn-row',

        fee_timer :null,

	template: _.template($('#SchedAssignmentTemplate').html()),

        events: {
            'change .employee': 'employeeChanged',
            'keyup .fee': 'feeChanged',
            'click button.assn-remove': 'removeAssignment',
            'click button.assn-add': 'addAssignmentRow'
        },

        initialize: function (attrs, options) {
            if (options.assn) {
                this.model = options.assn;
                this.role = ROLE[this.model.get('role')];
            } else {
                attrs = attrs || {};
                attrs.role = options.role_name;
                this.model = new npv.ScheduledAssignment(attrs, options);
                this.role = options.role;
            }
            this.parent = options.parent;
            this.employees = options.employees;

            this.collection = options.assignments;
            // TODO: This feels a little off; it is required to find the right
            //       model after a bulk-save where the current is now stale.
            this.listenTo(this.collection, 'reset', this.resetModel);
            this.listenTo(this.collection, 'change', this.updateValid);
            this.listenTo(this.collection, 'remove', this.updateValid);
            this.listenTo(this.collection, 'add', this.updateValid);

            this.listenTo(this.model, 'change', this.addModelIfValid);
        },

        resetModel: function () {
            var uri = this.model.get('resource_uri');
            if (uri) {
                // TODO: Do I need to do anything to depose the now stale
                //       this.model?
                this.model = this.collection.findWhere({resource_uri: uri});
            }
        },

        selectEmployee: function (employee) {
            employee = employee || '';
            this.$employee.val(employee);
            this.employeeChanged();
            this.updateValid();
        },

        // input control even handlers

        employeeChanged: function () {
            this.model.set('employee', handle_empty(this.$employee.val()));
            // This mostly handles the case of setting procurer to principal
            // but the logic works generally even if not otherwise triggered.
            if (!this.model.get('employee')) {
                this.model.set('fee', null);
                this.collection.markForDelete(this.model);
            } else {
                this.collection.unmarkForDelete(this.collection.findWhere(
                    {role: this.model.get('role'),
                     employee: this.model.get('employee')}
                ));
            }
        },

        feeChanged: function () {
            var this_model = this.model;
            var this_fee = this.$fee;
            if (this.fee_timer != null) {
                window.clearTimeout(this.fee_timer);
                this.fee_timer = null;
            }
            this.fee_timer = window.setTimeout(function () {
                this_model.set('fee', currency_value(this_fee.val()));
            }, npv.validate_idle_timeout);
        },

        // action button handlers

        removeAssignment: function () {
            this.trigger('remove', this);
            this.remove();
            // While backbone.collectionsubset will percolate 'add' events, it
            // does not do the same for 'remove', it will however handle parent
            // removals so remove from parent (top-level) collection. For the
            // moment we'll call the bulk feature directly instead of remove().
            this.collection.markForDelete(this.model);
        },

        /** Chain plus-button click up to the role view to add a blank row */
        addAssignmentRow: function () {
            this.trigger('addAssignmentRow');
        },

        /** If new valid model add it to top-level scheduled-assignments */
        addModelIfValid: function () {
            // TODO: this could probably made cleaner and more clear
            if (this.model.isValid()) {
                var assn = this.collection.findWhere(
                    {employee: this.model.get('employee'),
                     role: this.model.get('role')}
                );
                if (!assn) {
                    this.collection.add(this.model,
                                        { collection: this.collection });
                } else {
                    if (this.model.url() !== assn.url()) {
                        this.collection.markForDelete(this.model);
                        this.model = assn;
                    }
                }
            }
            this.$employee.val(this.model.get('employee') || '');
            this.$fee.val(this.model.get('fee'));
            this.updateValid();
        },

        updateValid: function () {
            var valid = this.model.isValid();
            if (!valid && this.model.get('employee')) {
                this.$fee_group.addClass('has-error');
            } else {
                this.$fee_group.removeClass('has-error');
            }
            this.$add_button.attr('disabled', !valid);

            // disable fee for procurer if it is the principal
            if (this.model.get('role') === 'PROCURER') {
                var principal = (this.$employee.val() == '');
                this.$fee.attr('disabled',  principal);
            }
        },

        // TODO: use events to filter out already assigned-for-role
        updateEmployeeOptions: function () {
            var that = this;
            this.employees.each(function (emp) {
                that.$employee.append(
                    $('<option></option>').val(emp.url()).text(emp.get('name'))
                );
            });
            this.$employee.val(this.model.get('employee') || '');
        },

        render: function () {
            var data = this.model.toJSON();
            data.role = this.role;
            data.employee = data.employee || '';
            this.$el.html(this.template(data));
            this.$employee = this.$el.find('select.employee');
            this.$fee = this.$el.find('input.fee');
            this.$fee_group = this.$el.find('.fee-group');
            this.$add_button = this.$el.find('button.assn-add');

            this.updateEmployeeOptions();
            this.updateValid();

            return this;
        }
    });


    /**
     * A Role section with child assignment views.
     */
    npv.RoleView = Backbone.View.extend({

	template: _.template($('#RoleTemplate').html()),

        initialize: function (undefined, options) {
            this.assn_views = [];
            // TODO: Should I just pass in the role def instead of the name?
            this.role_name = options.role;
            this.role = ROLE[options.role];
            this.assignments = options.assignments;
            this.role_assignments = this.assignments.roleSubcollection(
                options.role
            );
            this.employees = options.employees.roleSubcollection(options.role);
        },

        renderAssignment: function (assn) {
            var options = {
                role: this.role, assn: assn,
                role_name: this.role_name,
                employees: this.employees,
                assignments: this.assignments
            };
            var assn_view = new npv.ScheduledAssignmentView(null, options);
            this.$assignments.append(assn_view.render().el);

            // handle requests for a new empty assignment row
            this.listenTo(assn_view, 'addAssignmentRow',
                          this.renderAssignment);

            this.assn_views.push(assn_view);
            var that = this;
            this.listenTo(assn_view, 'remove', function(view) {
                that.assn_views = _.reject(that.assn_views, function(view) {
                    return view.cid === assn_view.cid;
                });
            });

            return this;
        },

        /**
         * Ensure employee is assigned to this role.
         */
        selectEmployee: function(employee) {
            if (!this.role.multiple) {
                this.assn_views[0].selectEmployee(employee);
                return this;
            }

            var assn = this.assignments.findWhere(
                {employee: employee, role: this.role_name}
            );
            if (!assn) {
                var last_assn = _.last(this.assn_views);
                // add new blank row if there isn't one
                if (last_assn.model && last_assn.model.get('employee')) {
                    this.renderAssignment();
                    last_assn = _.last(this.assn_views);
                }
                last_assn.selectEmployee(employee);
            }

            return this;
        },

        render: function () {
            this.$el.html(this.template(this.role));
            this.$assignments = this.$('.assns');

            var that = this;
            this.role_assignments.each(function (assn) {
                that.renderAssignment(assn);
            });

            // Add an unfilled assignment row for adding a new one
            if (!this.role_assignments.length || this.role.multiple) {
                this.renderAssignment();
            }

            return this;
        }
    });


    /**
     * Top-level for assignments, creates all of the roles views.
     */
    npv.ScheduledAssignmentsView = Backbone.View.extend({

        el: '#Roles',

        // map of role-name to role-view, set in render()
        role_views: {},

        initialize: function (employees, assns) {
            this.employees = new npv.Employees(employees);
            this.assignments = new npv.ScheduledAssignments(assns);
        },

        /** auto-set some roles based on the selected office */
        officeChanged: function ($option) {
            // use office default for manager role
            var employee = $option.data('manager');
            this.role_views.MANAGER.selectEmployee(employee);

            // use office default for procurer role (blank for Principal)
            employee = $option.data('procurer');
            this.role_views.PROCURER.selectEmployee(employee);

            // use office default for researcher role
            employee = $option.data('researcher');
            this.role_views.RESEARCHER.selectEmployee(employee);
        },

        render: function () {
            var that = this;
            _.each(roles_order, function (r, i) {
                var opts = {
                    role: r,
                    assignments: that.assignments,
                    employees: that.employees
                };
                var view = new npv.RoleView(null, opts);
                that.role_views[r] = view;
                that.$el.append(view.render().el);
            });
        }
    });

})(jQuery);
