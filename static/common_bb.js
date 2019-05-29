var npv = npv || {};

/**
 * A single-Model wrapper for a Collection to allow for bulk operations
 */
npv.CollectionBulkWrapper = Backbone.Model.extend({
    url: function() {
        return (this.collection.bulkURL() || this.collection.url());
    },

    initialize: function(collection) {
        this.collection = collection;
    },

    save: function(options) {
        var that = this;
        return Backbone.sync('patch', this, options).complete(function () {
            that.resetCollection();
        });
    },

    resetCollection: function () {
        this.collection.toDelete = [];
        this.collection.fetch({ reset: true });
    },

    toJSON: function() {
        return this.collection.bulkJSON();
    }
});


/**
 * Methods for bulk-save collections (via CollectionBulkWrapper).
 *
 * Optionally supports isDirty features if items and/or collection does.
 */
npv.BulkCollectionMixin = {

    bulkJSON: function () {
        var data = {};
        data.objects = [];
        var that = this;
        this.each(function (item) {
            if (typeof item.isEmpty !== 'undefined' && item.isEmpty()) {
                that.markForDelete(item);
            } else {
                var dirty = true;
                if (typeof item.isDirty !== 'undefined') {
                    dirty = item.isDirty();
                }
                if (dirty) {
                    data.objects.push(item.toJSON());
                }
            }
        });
        if (this.toDelete.length) {
            data.deleted_objects = this.toDelete;
        }
        if (!data.objects.length && !this.toDelete.length) {
            data = {};
        }
        return data;
    },

    markForDelete: function (item) {
        if (item.get('id') && !_.contains(this.toDelete, item.url())) {
            this.toDelete.push(item.url());
            // NOTE: Using 'change' instead of 'remove' to not interfere with
            //       remove logic built into the mixed into objects.
            this.trigger('change', item);
        }
    },

    unmarkForDelete: function (item) {
        if (item) {
            this.toDelete = _.without(this.toDelete, item.url());
            this.trigger('change', item);
        }
    },

    save: function (options) {
        if (typeof this.isDirty !== 'undefined' && !this.isDirty()) {
            return $.Deferred().resolve();
        }
        var wrap = new npv.CollectionBulkWrapper(this);
        return wrap.save(options);
    }
};


/**
 * Some basic are-there-unsaved-changes? tracking and querying.
 *
 * NOTE: Internal attributes and methods are prefixed with "idmm".
 */
npv.IsDirtyModelMixin = {

    initialize: function (attrs, options) {
        this.on('sync', this.idmmSetOriginal);
        // TODO: should we also bind reset?
        this.idmmSetOriginal();
    },

    idmmSetOriginal: function () {
        this.idmmOriginal = _.clone(this.toJSON());
    },

    isDirty: function() {
        return this.isNew() || !_.isEqual(this.idmmOriginal, this.toJSON());
    }
};


/**
 * Implement isDirty and isValid for collections.
 */
npv.IsDirtyCollectionMixin = {

    isValid: function () {
        var to_delete = [];
        if (typeof this.toDelete !== 'undefined') {
            to_delete = this.toDelete;
        }
        return this.every(function (item) {
            if (!_.contains(to_delete, item.url())) {
                return item.isValid();
            }
            return true;
        });
    },

    isDirty: function () {
        var to_delete = [];
        if (typeof this.toDelete !== 'undefined') {
            to_delete = this.toDelete;
        }
        var has_dirty = this.any(function (item) { return item.isDirty(); });
        return !!to_delete.length || has_dirty;
    }
};
