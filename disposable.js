'use strict';

var domainMap = {}
var arr = require('./domains')

for (var i = 0; i < arr.length; ++i)
    domainMap[arr[i]] = null

module.exports = {
    validate: function(domainOrEmail, callback) {
        var domain = domainOrEmail.split('@').pop()
        var isValid = !domainMap.hasOwnProperty(domain)

        if (!callback) {
            return isValid
        }
        callback(null, isValid)
    },

    add: function (arg) {
        if(typeof arg === 'string') {
            addSingle(arg);
        } else if (arg instanceof Array) {
            for(var i = 0; i < arg.length; i++) {
                addSingle(arg[i]);
            }
        }
    }
}

function addSingle(arg) {
    var domain = arg.split('@').pop();
    if(!domainMap.hasOwnProperty(domain)) {
        domainMap[domain] = null;
    }
}