/**
 * Property & Address management
 *
 * Requires:
 *   - common.js
 *   - common_bb.js
 *   - cocktail
 *
 *   - npv.settings:
 *     - property_subtypes - property-subtypes for property-type map
 *     - property_uri
 *     - address_uri - collection endpoint
 *
 *   - #PropForm element
 *   - #PropertyAddresses element
 *   - #AddressTemplate Underscore template
 *
 * Sets npv.property_addresses to a PropertyAddresses collection.
 */

// TODO: handle delete; use bulk update

var npv = npv || {};

(function ($) {

    'use strict';

    /* Data */

    npv.Property = Backbone.Model.extend({

        initialize: function () {
            this.on('change:property_type', function () {
                this.set('property_subtype', null);
            });
        },

        url: function () {
            return this.get('resource_uri');
        },

        validate: function (attrs) {
            var errors = [];
            if (!attrs.name) {
                errors.push({
                    name: 'propName',
                    message: 'Name Required.'
                });
            }
            if (!attrs.property_type || attrs.property_type == "") {
                errors.push({
                    name: 'propertyType',
                    message: 'Property Type required'
                });
            }
            if (errors.length <= 0) {
                this.trigger("valid", true);
            }

            return errors.length > 0 ? errors : null;
        },

        toJSON: function (options) {
            var json = Backbone.Model.prototype.toJSON.call(this, options);
            // TODO: sort out whether to include cid*, contact, ...
            return _.omit(json, 'addresses', 'cid1', 'cid2', 'contact',
                          'created', 'changed');
        },

        save: function (attrs, options) {
            if (!this.isDirty()) {
                return $.Deferred().resolve();
            }
            options = options || {};
            options.patch = true;
            return Backbone.Model.prototype.save.call(this, attrs, options);
        },

        subtypes: function (property_type) {
            property_type = property_type || this.get('property_type');
            // TODO: Remove 'subtype' object wrapper; <type>: [<sub1>, <sub2>]
            return npv.property_subtypes[property_type].subtype;
        }
    });

    Cocktail.mixin(npv.Property, npv.IsDirtyModelMixin);


    npv.Address = Backbone.Model.extend({

        defaults: {
            property: npv.settings.property_uri,
            address1: null,
            address2: null,
            city: null,
            county: null,
            state: null,
            zipcode: null
        },

        initialize: function () {
            if (!this.get('property')) {
                this.set('property', npv.settings.property_uri);
            }
        },

        url: function () {
            var uri = this.get('resource_uri');
            return (uri) ? uri : npv.settings.address_uri;
        },

        title: function () {
            var parts = [];
            if (this.get('address1')) {
                var street = this.get('address1') || '';
                if (this.get('address2')) {
                    street += ' ' + this.get('address2');
                }
                parts = [street];
            }
            if (this.get('city')) {
                parts.push(this.get('city'));
            }
            if (this.get('county')) {
                parts.push(this.get('county'));
            }
            if (this.get('state')) {
                parts.push(this.get('state'));
            }
            return parts.join(', ');
        },

        validate: function (attrs, options) {
            var errors = [];
            if (!attrs.address1) {
                errors.push({
                    name: 'address1',
                    message: 'Please fill in Street 1 field.'
                });
            }
            if (!attrs.city) {
                errors.push({
                    name: 'city', message: 'Please fill in City field.'
                });
            }
            if (!attrs.county) {
                errors.push({
                    name: 'county', message: 'Please fill in County field.'
                });
            }
            if (!attrs.state) {
                errors.push({
                    name: 'state', message: 'Please fill in County field.'
                });
            }
            if (!attrs.zipcode) {
                errors.push({
                    name: 'zipcode', message: 'Please fill in Zipcode field.'
                });
            }
            if (errors.length <= 0) {
                this.trigger("valid", true);
            }

            return errors.length > 0 ? errors : null;
        },
    });

    Cocktail.mixin(npv.Address, npv.IsDirtyModelMixin);


    npv.PropertyAddresses = Backbone.Collection.extend({
        model: npv.Address,

        url: npv.settings.address_uri,

        initialize: function (property) {
            this.property = property;
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
            this.each(function (address) {
                xhr = address.save();
            });
            return xhr;
        }
    });


    /* Views */

    npv.PropertyView = Backbone.View.extend({
        el: '#PropForm',
        fields: {},
        events: {
            'change #PropType': 'typeChanged',
            'change input': 'infoChanged',
            'change select': 'infoChanged',
            'change .propertyName': 'infoChanged'
        },

        initialize: function (prop) {
            this.model = new npv.Property(prop);
            this.listenTo(this.model, 'change:name', this.updateName);
            this.model.on("invalid", this.showErrors, this);
            this.model.on("error", this.showErrors, this);
            this.model.on("valid", this.hideErrors, this);
            this.fields = {};
            this.fields.propName = this.$('#PropName');
            this.$proposed = this.$('#PropProposed');
            this.$type = this.$('#PropType');
            this.$subtype = this.$('#PropSubtype');
            // use to default disable subtype if no options
            if (this.$subtype.find("option").length <= 1) {
                this.$subtype.attr('disabled', 'disabled');
            }
        },

        /** Input Events */

        infoChanged: function (evt) {
            var data = {
                name: handle_empty(this.fields.propName.val()),
                proposed: this.$proposed.is(':checked'),
                property_type: this.$type.val(),
                property_subtype: handle_empty(this.$subtype.val())
            };
            //var validation = this.model.validate(data);
            //if (!validation) {
            //    this.model.set(data);
            //}
            this.model.set(data, { validate: true });
        },

        typeChanged: function (e) {
            this.$subtype.find('option:not(:first-child)').remove();
            var subtypes = this.model.subtypes($(e.target).val());
            if (!subtypes.length) {
                this.$subtype.attr('disabled', 'disabled');
            } else {
                this.$subtype.removeAttr('disabled');
            }

            var that = this;
            _.each(subtypes, function (subtype) {
                that.$subtype.append($('<option></option>').text(subtype));
            });
        },

        updateName: function () {
            $('.property-name').text(this.model.get('name'));
        },
        showErrors: function (model, errors) {
            this.$('input').removeClass('error');
            _.each(errors, function (error) {
                var control = this.fields[error.name];
                control.addClass('error');
            }, this);
        },

        hideErrors: function (model, errors) {
            this.$('input').removeClass('error');
        }
    });


    npv.AddressView = Backbone.View.extend({
        fields: {},
        tagName: 'div',
        className: 'prop-address panel panel-default',

        template: _.template($('#AddressTemplate').html()),
        events: {
            'change .address-input': 'updated',
            'click button.add-new-address': 'addNew'
        },

        initialize: function (addy) {
            if (!addy) {
                addy = new npv.Address();
            }
            this.model = addy;

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
                this.trigger('addNew', this.model)
                this.render();
            }
        },

        updated: function (evt) {
            var data = {
                address1: handle_empty(this.fields.address1.val()),
                address2: handle_empty(this.fields.address2.val()),
                city: handle_empty(this.fields.city.val()),
                county: handle_empty(this.fields.county.val()),
                state: handle_empty(this.fields.state.val()),
                zipcode: handle_empty(this.fields.zipcode.val())
            };
            this.model.set(data, { validate: true });
        },

        render: function (is_empty) {
            var attrs = this.model.toJSON();
            // is_empty indicates this is the add-addy-form
            attrs.is_empty = is_empty || false;
            // is_new indicates this is not yet persisted on the server
            attrs.is_new = (!attrs.id && !is_empty);
            if (is_empty) {
                attrs.title = 'New Address';
            } else {
                attrs.title = this.model.title();
            }
            if (!attrs.id) {
                attrs.id = 'new' + this.model.cid;
            }
            this.$el.html(this.template(attrs));

            this.fields = {};
            this.fields.address1 = this.$('.address1');
            this.fields.address2 = this.$('.address2');
            this.fields.city = this.$('.city');
            this.fields.county = this.$('.county');
            this.fields.state = this.$('.state');
            this.fields.zipcode = this.$('.zipcode');

            return this;
        },

        showErrors: function (model, errors) {
            this.$('.address-input').removeClass('error');
            _.each(errors, function (error) {
                var control = this.fields[error.name];
                control.addClass('error');
            }, this);
        },

        hideErrors: function (model, errors) {
            this.$('.address-input').removeClass('error');
        },

        uncollapse: function () {
            // could use this.$('.collapse').collapse('show'); but adding the
            // the class directly seems to skip the animation
            this.$('.collapse').addClass('in');
        }
    });


    npv.AddressListView = Backbone.View.extend({
        el: '#PropertyAddresses',

        initialize: function (addys) {
            this.addresses = new npv.PropertyAddresses(addys);
            this.listenTo(this.addresses, 'add', this.renderNewAddress);
        },

        /**
         * Render the "New Address" form panel.
         *
         * @param addy - optional npv.Address to use for default values.
         */
        renderNewAddress: function (addy) {
            var attrs = (addy) ? addy.toJSON() : {};
            var new_addy = new npv.Address(
                _.omit(attrs, 'id', 'cid', 'resource_uri', 'geolocation',
                       'google_address', 'latitude', 'longitude')
            );
            var av = new npv.AddressView(new_addy).render(true);
            this.listenTo(av, 'addNew', this.addNewToCollection);
            if (addy || !this.addresses.length) {
                av.uncollapse();
            }
            this.$el.append(av.el);
            return this;
        },

        addNewToCollection: function(address) {
            this.addresses.add(address);
        },

        render: function () {
            var that = this;
            var av;
            this.addresses.each(function (addy) {
                av = new npv.AddressView(addy);
                that.$el.append(av.render().el);
            });
            this.renderNewAddress();
            return this;
        }

    });

})(jQuery);
