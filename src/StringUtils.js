/*jslint node: true */
'use strict';
/**
 * String utils
 * @class
 * @constructor
 */
function StringUtils() {
}

/**
 * Check if string ends with other one
 * @param initialStr string that has to be checked
 * @param endingStr end string
 * @returns {boolean} true if initialStr ends with endingStr
 */
StringUtils.prototype.endsWith = function (initialStr, endingStr) {
    if (initialStr === null) {
        return false;
    }
    if (endingStr === null) {
        return false;
    }
    if (initialStr === '' && endingStr === '') {
        return true;
    }

    return initialStr.length >= endingStr.length &&
        initialStr.lastIndexOf(endingStr) + endingStr.length == initialStr.length;
};

module.exports = new StringUtils();