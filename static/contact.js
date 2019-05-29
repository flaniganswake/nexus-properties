/**
 * Property & Address management
 *
 * Requires:
 *   - common.js
 *   - common_bb.js
 *   - cocktail
 *
 *   - npv.settings:
 *     - amf_uri
 */

// TODO: handle delete; use bulk update

var npv = npv || {};

(function ($) {

    'use strict';

    // Models
    npv.Contact = Backbone.Model.extend({
        //Set Defaults all to null
        defaults: {
            last_name: null,
            first_name: null,
            nickname: null,
            salutation: null,
            email: null,
            phone: null,
            mobile: null,
            fax: null,
            address: null,
            client:null,
            employee:null,
            amf:null
        },
        initialize: function () {
          // Set what type of Model this goes on: Client, Emp, amf
        },

        validate: function (attrs) {
            var errors = [];
            if (!attrs.last_name) {
                errors.push({
                    name: 'last_name',
                    message: 'Please fill in the last name field.'
                });
             }
            if (!attrs.first_name) {
                errors.push({
                    name: 'first_name',
                    message: 'Please fill in the first name field.'
                });
            }
            //if (!attrs.nickname) {
            //    errors.push({
            //        name: 'nickname',
            //        message: 'Please fill in the nickname field.'
            //    });
            //}
            //if (!attrs.salutation) {
            //    errors.push({
            //        name: 'salutation',
            //        message: 'Please fill in the salutation field.'
            //    });
            //}
            if (!attrs.email) {
                errors.push({
                    name: 'email',
                    message: 'Please fill in the email field.'
                });
            }
            //if (!attrs.phone) {
            //    errors.push({
            //        name: 'phone',
            //        message: 'Please fill in the phone field.'
            //    });
            //}
            //if (!attrs.mobile) {
            //    errors.push({
            //        name: 'mobile',
            //        message: 'Please fill in the mobile field.'
            //    });
            //}
            //if (!attrs.fax) {
            //    errors.push({
            //        name: 'fax',
            //        message: 'Please fill in the fax field.'
            //    });
            //}
            //if (!attrs.address) {
            //    errors.push({
            //        name: 'address',
            //        message: 'Please fill in the address field.'
            //    });
            //}
            //TO DO: Validate Client, Employee or AMF???

            //Check if model is valid
            if (errors.length <= 0) {
                this.trigger("valid", true);
            }
            return errors.length > 0 ? errors : false;
        },

        url: function() {
            if (this.get('resource_uri')) {
                return this.get('resource_uri');
            } else if (this.isNew()) {
                return '/api/v1/contact/';
            }
            console.warn('Contact is not new but has no resource_uri');
            console.log(this.toJSON());
            return null;
        },
        title: function() {
            if (this.get('first_name')) {
                var name = this.get('first_name') || '';
                if (this.get('last_name')) {
                    name += ' ' + this.get('last_name');
                }
            }
            return name;
        },
        save: function (attrs, options) {
            options = options || {};
            options.patch = true;
            return Backbone.Model.prototype.save.call(this, attrs, options);
        }
    });
    Cocktail.mixin(npv.Contact, npv.IsDirtyModelMixin);

    // Collections
    npv.Contacts = Backbone.Collection.extend({
        url: '/api/v1/contact/?flat=1',
        model: npv.Contact,
        initialize: function (contact) {
            this.contact = contact;
        },

        isDirty: function () {
            var has_dirty = this.any(function (a) { return a.isDirty(); });
            // TODO: once bulk operations are used we'll need to check toDelete
            // return !this.toDelete || has_dirty;
            return has_dirty;
        },
        isValid: function() {
        return this.every(function(item) { return item.isValid(); });
    },

    // TODO: remove once moved to bulk-collection impl
    save: function() {
        if (!this.isDirty()) {
            return $.Deferred().resolve();
        }
        var xhr;
        this.each(function (contact) {
            xhr = contact.save();
        });
        return xhr;
    }
    });
    

    // Views
    npv.ContactView = Backbone.View.extend({
        fields: {},
        tagName: 'div',
        className: 'cont-address panel panel-default',

        template: _.template($('#ContactTemplate').html()),
        events: {
            'change input': 'updated',
            'click #Save': 'addNew'
        },

        initialize: function (cont) {
           
            if (!cont) {
                cont = new npv.Contact();
            }
            this.model = cont;
            this.listenToOnce(this.model, 'change:resource_uri',
                              this.removeNewLabel);
            this.listenTo(this.model, 'sync', this.renderTitle);
            this.model.on("invalid", this.showErrors, this);
            this.model.on("error", this.showErrors, this);
            this.model.on("valid", this.hideErrors, this);
        },

        removeNewLabel: function () {
            this.$('.new-label').hide();
        },

        renderTitle: function () {
            this.$('.panel-title').find('a').text(this.model.title());
        },

        addNew: function (evt) {
            evt.preventDefault();
            this.updated();
            if (this.model.isValid()) {
                npv.contacts.add(this.model);
                npv.update_save_button();
                this.render();
            }
        },

        updated: function (evt) {
            var data = {
                first_name: handle_empty(this.fields.first_name.val()),
                last_name: handle_empty(this.fields.last_name.val()),
                nickname: handle_empty(this.fields.nickname.val()),
                salutation: handle_empty(this.fields.salutation.val()),
                email: handle_empty(this.fields.email.val()),
                phone: handle_empty(this.fields.phone.val()),
                mobile: handle_empty(this.fields.mobile.val()),
                fax: handle_empty(this.fields.fax.val()),
                address: handle_empty(this.fields.address.val())
            };
            this.model.set(data, { validate: true });
            //npv.update_save_button();
        },

        render: function (is_empty) {
            var attrs = this.model.toJSON();
            // is_empty indicates this is the add-contact-form
            attrs.is_empty = is_empty || false;
            // is_new indicates this is not yet persisted on the server
            attrs.is_new = (!attrs.id && !is_empty);
            if (is_empty) {
                attrs.title = 'New Contact';
            } else {
                attrs.title = this.model.title();
            }
            if (!attrs.id) {
                attrs.id = 'new' + this.model.cid;
            }
            this.$el.html(this.template(attrs));

            this.fields = {};
            this.fields.first_name = this.$('.first_name');
            this.fields.last_name = this.$('.last_name');
            this.fields.nickname = this.$('.nickname');
            this.fields.salutation = this.$('.salutation');
            this.fields.email = this.$('.email');
            this.fields.phone = this.$('.phone');
            this.fields.mobile = this.$('.mobile');
            this.fields.fax = this.$('.fax');
            this.fields.address = this.$('.address');
            return this;
        },

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
        },

        uncollapse: function () {
            // could use this.$('.collapse').collapse('show'); but adding the
            // the class directly seems to skip the animation
            this.$('.collapse').addClass('in');
        }
    });
    npv.ContactListView = Backbone.View.extend({
        el: '#Contacts',
        initialize: function (conts) {
            if (conts.length > 0) {
                this.contacts = new npv.Contacts(conts);
            } else {
                this.contacts = new npv.Contacts();
            }
            this.listenTo(this.contacts, 'add', this.renderNewContact);
        },

        /**
         * Render the "New Address" form panel.
         *
         * @param addy - optional npv.Address to use for default values.
         */
        renderNewContact: function (cont) {
            var attrs = (cont) ? cont.toJSON() : {};
            var new_cont = new npv.Contact(
                _.omit(attrs, 'id', 'cid', 'resource_uri')
            );
            var av = new npv.ContactView(new_cont).render(true);
            if (cont || !this.contacts.length) {
                av.uncollapse();
            }
            this.$el.append(av.el);
            return this;
        },

        render: function () {
            var that = this;
            var av;
            this.contacts.each(function (cont) {
                av = new npv.ContactView(cont);
                that.$el.append(av.render().el);
            });
            this.renderNewContact();
            return this;
        }

    });

})(jQuery);
