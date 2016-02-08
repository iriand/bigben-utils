/*jslint node: true */
'use strict';

function StringUtils() {
}

StringUtils.prototype.endsWith = function (initialStr, endingStr) {
    if (initialStr == null) {
        return false;
    }
    if (endingStr == null) {
        return false;
    }
    if (initialStr === '' && endingStr === '') {
        return true;
    }

    return initialStr.length >= endingStr.length &&
        initialStr.lastIndexOf(endingStr) + endingStr.length == initialStr.length;
};

module.exports = new StringUtils();