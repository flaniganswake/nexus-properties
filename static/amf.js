/**
 * Property & Address management
 *
 * Requires:
 *   - common.js
 *   - common_bb.js
 *   - cocktail
*    - contact
 *
 *   - npv.settings:
 *     - amf_uri
 */

// TODO: handle delete; use bulk update

var npv = npv || {};

(function ($) {

    'use strict';

    /* Data */

    npv.Amf = Backbone.Model.extend({

        initialize: function () {
          
        },

        validate: function (attrs) {
            var errors = [];
            if (!attrs.name) {
                errors.push({
                    name: 'name',
                    message: 'Please fill in the name field.'
                });
            }
            //Check if model is valid
            if (errors.length <= 0) {
                this.trigger("valid", true);
            }
            return errors.length > 0 ? errors : false;
        },

        url: function() {
            var uri = this.get('resource_uri');
            //TO DO: Remove url hard code  npv.settings.amf_uri
            return (uri) ? uri : "/api/v1/amf/";
        },

        save: function (attrs, options) {
            options = options || {};
            options.patch = true;
            return Backbone.Model.prototype.save.call(this, attrs, options);
        }
    });

    Cocktail.mixin(npv.Amf, npv.IsDirtyModelMixin);

    /* Views */

    npv.AmfEditView = Backbone.View.extend({
        el: '#AmfForm',
        fields: {},
        events: {
            'change .name': 'nameChange',
            'click #Save': 'saveModel',
        },

        initialize: function (prop, contacts) {
            //Set model
            this.model = new npv.Amf(prop);

            //Set Triggers
            this.listenTo(this.model, 'change:name', this.nameChange);

            //Set local Fields
            this.fields.name = this.$('.name');

            //Set model values -- Could load through django vars
            this.fields.name.val(this.model.get('name'));

            //Set validation triggers
            this.model.on("invalid", this.showErrors, this);
            this.model.on("error", this.showErrors, this);
            this.model.on("valid", this.hideErrors, this);

            //Contacts
            npv.contact_view = new npv.ContactListView(contacts);
            npv.contacts = npv.contact_view.contacts;
            npv.contact_view.render();

            npv.update_save_button();

        },

        // Model Events
        nameChange: function (e) {
            var data = {
                name: handle_empty(this.fields.name.val())
            };
            npv.update_save_button();
        },
        saveModel: function (e) {
            e.preventDefault();
            var data = {
                name: handle_empty(this.fields.name.val()),
            };
            this.model.set(data, { validate: true });
           
            if (this.model.isDirty() && this.model.isValid()) {
                    NPVNexus.Status.loading();
                    var that = this;
                    this.model.save(null, { wait: true }).complete(function () {
                        npv.contacts.invoke('set', { "amf": that.model });
                        npv.contacts.save();
                        NPVNexus.Status.success();
                    });
                } else if (npv.contacts.isDirty()) {
                    npv.contacts.invoke('set', { "amf": that.model });
                    npv.contacts.save();
                    NPVNexus.Status.success();
                }
           
        },
        // Validation Events
        showErrors: function (model, errors) {
            this.$('input').removeClass('error');
            _.each(errors, function (error) {
                console.log(error.message);
                var control = this.fields[error.name];
                control.addClass('error');
            }, this);
        },
        hideErrors: function (model, errors) {
            this.$('input').removeClass('error');
        }
    });

    npv.update_save_button = function (show) {
        // Good for New creation... Bad for Editing as it will always show the Save BTN... 
        // Prob do a logic redesign for this...
        if ($("#Amfname").val() != "" && npv.contacts.length > 0) {
            $("#Save").show();
        } else {
            $("#Save").hide();
        }
    }



})(jQuery);
