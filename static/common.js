/**
 * Utilities and the like useful across the different parts of the Nexus app.
 *
 * NOTE: Requires Underscore.js
 */


/** Keyboard Constants */

var ENTER_KEY = 13;
var ESC_KEY = 27;

// TODO: setup window.npv namespace here?


/**
 * Extract and return just the path part of the Location response header.
 *
 * Obviously you could make this more generic, but until we have the need...
 *
 * @param {jqXHR} xhr The AJAX response object to extract the path from.
 */
function location_path(xhr) {
    var reg = /.+?\:\/\/.+?(\/.+?)(?:#|\?|$)/;
    return reg.exec(xhr.getResponseHeader("Location"))[1];
}


/**
 * Break a flat list into sub lists of a supplied size.
 *
 * @param fillvalue data to use to pad out the last chunk to the length of len
 * @param rmfillchunk whether to remove last chunk if it only has fillvalues
 */
function chunk(arr, len, fillvalue, rmfillchunk) {
    fillvalue = (typeof fillvalue === 'undefined') ? null : fillvalue;
    rmfillchunk = (typeof rmfillchunk === 'undefined') ? true : rmfillchunk;

    var chunks = [];
    var i = 0;
    var n = arr.length;

    while (i < n) {
        chunks.push(arr.slice(i, i += len));
    }

    while (chunks[chunks.length - 1].length < len) {
        chunks[chunks.length - 1].push(fillvalue);
    }

    if (rmfillchunk && !_.without(_.last(chunks), fillvalue).length) {
        chunks.length = chunks.length - 1;
    }

    return chunks;
}


/**
 * Return blank (default null) if val is falsey otherwise return val trimmed.
 */
function handle_empty(val, blank) {
    blank = (typeof blank === 'undefined') ? null : blank;
    if (!val || !val.trim()) {
        return blank;
    }
    return val.trim();
}


/**
 * Shortcut to parse then format a currency value, handling empty and null.
 */
function currency_value(val, blank) {
    // TODO: This will (incorrectly?) return 0 for empty. Fix or verify correct.
    blank = (typeof blank === 'undefined') ? null : blank;
    var parsed = parseFloat(handle_empty(val, 0)) || blank;
    if (parsed && parsed !== blank) {
        return parsed.toFixed(2);
    }
    return blank;
}


var SaveAlert = (function() {
    "use strict";

    var elem, hideHandler, that = {};

    that.init = function(options) {
        elem = $(options.selector);
    };

    that.show = function(text, success) {
        success = (typeof success === 'undefined') ? null : success;
        if (success != null) {
            elem.toggleClass('alert-success', success);
            elem.toggleClass('alert-danger', !success);
        }
        clearTimeout(hideHandler);
        elem.find("span").html(text);
        elem.delay(200).fadeIn().delay(3000).fadeOut();
    };

    that.success = function(text) {
        that.show(text, true);
    };

    that.error = function(text) {
        that.show(text, false);
    };

    return that;
}());
