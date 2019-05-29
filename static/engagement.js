var npv = npv || {};

(function ($) {

    'use strict';

    npv.Engagement = Backbone.Model.extend({

        defaults: {
            client: null,
            client_contact: null,
            amf: null,
            amf_contact: null,
            borrower: null,
            portfolio: null,
            property: null,
            notes: ''
        },

        initialize: function() {
            this.on('change:client', this.clientChanged);
            this.on('change:amf', this.amfChanged);

            // property and portfolio are mutually exclusive so if one is set
            // unset the other
            this.on('change:portfolio', function () {
                if (this.get('portfolio')) {
                    this.set('property', null);
                }
            });
            this.on('change:portfolio', function () {
                if (this.get('property')) {
                    this.set('portfolio', null);
                }
            });
        },

        // property, portfolio, and client_contact are tied to one client so
        // if the client changes unset those.
        clientChanged: function() {
            this.set('client_contact', null);
            this.set('property', null);
            this.set('portfolio', null);
        },

        amfChanged: function() {
            if (!this.get('amf')) {
                this.set('amf_contact', null);
            }
        },

        validate: function(attrs, options) {
            if (!attrs.client || !attrs.client_contact ||
                attrs.client_contact === "") {
                return 'Incomplete client info';
            }
            if (attrs.amf && !attrs.amf_contact) {
                return 'Selecting an AMF requires an AMF contact';
            }
            if ((!attrs.property && !attrs.portfolio) ||
                (attrs.property && attrs.portfolio)) {
                return 'Either a property or a portfolio must be selected';
            }
            return null;
        },

        url: function () {
            var uri = this.get('resource_uri');
            if (uri) {
                return uri;
            }
            return '/api/v1/engagement/';
        }

    });

    Cocktail.mixin(npv.Engagement, npv.IsDirtyModelMixin);


    npv.Client = Backbone.Model.extend({
        url: function () {
            return this.get('resource_uri');
        }
    });

    npv.Clients = Backbone.Collection.extend({
        url: '/api/v1/client/?flat=1',
        model: npv.Client
    });

    npv.Property = Backbone.Model.extend({
        url: function() {
            if (this.get('resource_uri')) {
                return this.get('resource_uri');
            } else if (this.isNew()) {
                return '/api/v1/property/';
            }
            console.warn('Property is not new but has no resource_uri');
            console.log(this.toJSON());
            return null;
        }
    });

    npv.Portfolio = Backbone.Model.extend({
        url: function() {
            if (this.get('resource_uri')) {
                return this.get('resource_uri');
            } else if (this.isNew()) {
                return '/api/v1/portfolio/';
            }
            console.warn('Portfolio is not new but has no resource_uri');
            console.log(this.toJSON());
            return null;
        }
    });

    npv.ClientProperties = Backbone.Collection.extend({
        model: npv.Property,

        initialize: function(client) {
            this.client = client;
        },

        url: function() {
            return this.client.get('properties_uri_flat');
        }
    });

    npv.ClientPortfolios = Backbone.Collection.extend({
        model: npv.Portfolio,

        initialize: function(client) {
            this.client = client;
        },

        url: function() {
            return this.client.get('portfolios_uri_flat');
        }
    });

    npv.EngagementView = Backbone.View.extend({
        el: '#Content',

        events: {
            'change #Client': 'updateClient',
            'change #ClientContact': 'updateClientContact',
            'change #Amf': 'updateAMF',
            'change #AmfContact': 'updateAMFContact',
            'change input[name="property_or_portfolio"]': 'handlePoP',
            'change #Property': 'selectProperty',
            'change #Portfolio': 'selectPortfolio',
            'change #Borrower': 'updateBorrower',
            'click #NewPortfolioPropertyBtn': 'addPortfolioProperty'
        },

        initialize: function(engagement) {
            this.contact_map = $('body').data('contact-map');

            this.$client_contact = this.$('#ClientContact');
            this.$amf_contact = this.$('#AmfContact');
            this.$borrower = this.$('#Borrower');

            this.$new_porto_property = this.$('#NewPortfolioProperty');

            this.model = new npv.Engagement(engagement);

            var that = this;
            this.$select_prop = this.$('#Property').selectize({
                create: function (input, cb) {
                    that.createProperty(input, cb);
                },
                valueField: 'resource_uri',
                labelField: 'name',
                searchField: ['name']
            });
            this.select_prop  = this.$select_prop[0].selectize;
            this.select_prop.disable();

            this.$select_porto = this.$('#Portfolio').selectize({
                create: function(input, callback) {
                    that.createPortfolio(input, callback);
                },
                valueField: 'resource_uri',
                labelField: 'name',
                searchField: ['name']
            });
            this.select_porto  = this.$select_porto[0].selectize;
            this.select_porto.disable();

            this.listenToOnce(this.model, 'change:resource_uri',
                              this.updateEngagementProperties);

            if (this.model.get('client') && npv.client) {
                this.client = new npv.Client(npv.client);
                this.clientSelected();
            }

            if (this.model.get('amf')) {
                this.amfSelected();
            }

            if (this.model.get('property')) {
                this.$('#ForProperty').trigger('click');
                this.selectPoP('property');
            } else if (this.model.get('portfolio')) {
                this.$('#ForPortfolio').trigger('click');
                this.selectPoP('portfolio');
            }
        },

        updateClient: function(e) {
            if (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
            }

            this.model.set('client', this.$('#Client').val());

            this.client = new npv.Client(
                {resource_uri: this.model.get('client')}
            );
            var that = this;
            this.client.fetch().complete(function () {
                that.clientSelected();
                that.save();
            });
        },

        clientSelected: function() {
            if (!this.model.get('client')) {
                return this;
            }
            this.$client_contact.find('option:not(:first-child)').remove();

            var that = this;
            var contacts = this.contact_map[this.model.get('client')];
            _.each(contacts, function (con, i) {
                var op = $('<option></option>').attr('value', con[0]);
                op.text(con[1]);
                if (that.model.get('client_contact') == con[0]) {
                    op.prop('selected', true);
                }
                that.$client_contact.append(op);
            });
            this.$client_contact.prop('disabled', false);

            this.properties = new npv.ClientProperties(this.client);
            this.properties.fetch().complete(function () {
                that.updatePropertiesSelect();
            });

            this.portfolios = new npv.ClientPortfolios(this.client);
            this.portfolios.fetch().complete(function () {
                that.updatePortfoliosSelect();
            });

            this.updatePoP();

            return this;
        },

        updateClientContact: function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.model.set('client_contact', this.$('#ClientContact').val());
            this.save();
        },

        updateAMF: function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.model.set('amf', handle_empty(this.$('#Amf').val()));
            this.amfSelected();
            this.save();
        },

        amfSelected: function() {
            if (!this.model.get('amf')) {
                this.$('#AmfContactGroup').hide();
                return this;
            }

            this.$amf_contact.find('option:not(:first-child)').remove();
            var that = this;
            var contacts = this.contact_map[this.model.get('amf')];
            _.each(contacts, function (con, i) {
                var op = $('<option></option>').attr('value', con[0]);
                op.text(con[1]);
                if (that.model.get('amf_contact') == con[0]) {
                    op.prop('selected', true);
                }
                that.$amf_contact.append(op);
            });

            this.$('#AmfContactGroup').show();
            return this;
        },

        updateAMFContact: function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            var val = handle_empty(this.$('#AmfContact').val());
            this.model.set('amf_contact', val);
            this.save();
        },

        updateBorrower: function () {
            var val = handle_empty(this.$borrower.val());
            this.model.save('borrower', val);
            this.save();
        },

        updatePoP: function() {
            this.$('.pop-group .btn').removeClass('disabled').prop('disabled',
                                                                   false);
            return this;
        },

        selectPoP: function(pop_selection) {
            if (pop_selection === 'property') {
                this.$('#PropertyGroup').show();
                this.$('.pop-property').removeClass('hidden');
                this.$('#PortfolioGroup').hide();
                this.$('.prop-list').addClass('hidden');
                this.model.set('portfolio', null);
            } else if (pop_selection === 'portfolio') {
                this.$('#PropertyGroup').hide();
                this.$('.pop-property').addClass('hidden');
                this.$('#PortfolioGroup').show();
                this.$('.prop-list').removeClass('hidden');
                this.model.set('property', null);
            }
            return this;
        },

        handlePoP: function(e) {
            this.selectPoP($(e.target).val());
        },

        updatePropertiesSelect: function() {
            var that = this;
            this.select_prop.disable();
            this.select_prop.clearOptions();
            this.properties.each(function (prop) {
                that.select_prop.addOption(prop.toJSON());
            });
            this.select_prop.enable();

            if (this.model.get('property')) {
                this.select_prop.setValue(this.model.get('property'));
                this.updatePropertySetup();
                this.$('#ForGroup').click();
            }
        },

        selectProperty: function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.model.set('property', this.select_prop.getValue());
            this.save();
        },

        createProperty: function(val, cb) {
            var prop = new npv.Property({resource_uri: null, name: val,
                                         client: this.model.get('client')});
            this.properties.add(prop);
            var that = this;
            prop.save().complete(function() {
                that.select_prop.addOption(prop.toJSON());
                that.select_prop.addItem(prop.url());
                console.log('saved new property: ' + prop.url());
            });
        },

        createPortfolio: function(val, cb) {
            var porto = new npv.Portfolio({resource_uri: null, name: val,
                                           client: this.model.get('client')});
            this.portfolios.add(porto);
            var that = this;
            porto.save().complete(function() {
                that.select_porto.addOption(porto.toJSON());
                that.select_porto.addItem(porto.url());
                console.log('saved new portfolio: ' + porto.url());
            });
        },

        updateEngagementProperties: function() {
            if (this.model.get('property')) {
                this.updatePropertySetup();
            } else if (this.model.get('portfolio')) {
                this.updatePortfolioProperties();
            }
        },

        updatePropertySetup: function() {
            var query = '?engagement=' + this.model.get('resource_uri');
            var prop_pk = this.properties.findWhere(
                {resource_uri: this.select_prop.getValue()}
            ).id;
            var add_url = '/engagement/property/' + prop_pk + query;
            var btn = this.$('#PropertySetupGroup a');
            btn.attr('href', add_url);
            this.$('#PropertySetupGroup').show();
        },

        updatePortfolioProperties: function() {
            // TODO: move to a Backbone.Collection

            var porto_pk = this.portfolios.findWhere(
                {resource_uri: this.select_porto.getValue()}
            ).id;

            var that = this;
            $.ajax({
                // TODO: un-hardcode URL
                url: '/api/v1/property/?portfolio=' + porto_pk,

                success: function(results) {
                    $('#PropertiesList').empty();
                    var query = '?engagement=' + that.model.get('resource_uri');
                    $.each(results.objects, function(i, prop) {
                        // TODO: un-hardcode URL
                        var add_url = '/engagement/property/' + prop.id;
                        var row = $('<a></a>').attr('href',
                                                    add_url + query);
                        row.addClass("list-group-item");

                        var name = $('<h4></h4>').text(prop.name);
                        row.append(name.addClass('list-group-item-heading'));

                        // TODO: If require at least one address make sure of it
                        //       in the model code, otherwise do this safely.
                        var street = $('<p></p>')
                            .addClass('list-group-item-text');
                        if (prop.addresses.length) {
                            street.text(
                                prop.addresses[0].address1 || "not specified"
                            );
                        }
                        row.append(street);

                        $('#PropertiesList').append(row);
                    });
                    $('.prop-list').show();
                }
            });
        },

        updatePortfoliosSelect: function() {
            var that = this;
            this.select_porto.disable();
            this.select_porto.clearOptions();
            this.portfolios.each(function (porto) {
                that.select_porto.addOption(porto.toJSON());
            });
            this.select_porto.enable();

            if (this.model.get('portfolio')) {
                this.select_porto.setValue(this.model.get('portfolio'));
                this.updatePortfolioProperties();
                this.$('#ForPortfolio').click();
            }
        },

        selectPortfolio: function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.model.set('portfolio', this.select_porto.getValue());
            this.save();
        },

        addPortfolioProperty: function() {
            var prop_name = handle_empty(this.$new_porto_property.val());
            if (prop_name) {
                var prop = new npv.Property({
                    client: this.model.get('client'),
                    name: prop_name,
                    portfolio: this.model.get('portfolio')
                });
                var that = this;
                prop.save().complete(function() {
                    that.updatePortfolioProperties();
                })
            }
        },

        render: function() {
            if (this.model.get('client')) {
                this.updateClient();
            }
        },

        save: function() {
            if (this.model.isValid() && this.model.isDirty()) {
                var that = this;
                this.model.save(null, {wait: true}).complete(function () {
                    that.updateEngagementProperties();
                    SaveAlert.success('Successful save');
                    console.log('engagement saved: ' + that.model.url());
                });
            }
        }
    });

    SaveAlert.init({"selector": "#SaveAlert"});

})(jQuery);
