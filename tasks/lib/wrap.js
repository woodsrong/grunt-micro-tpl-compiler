/**
 * @Module
 * @Author xianqian.rxq@alibaba-inc.com
 * @Date 2014-07-16.
 */

'use strict';

var wrapMap = {
    requirejs: {
        before: '',
        after: ''
    },
    seajs: {
        before: '',
        after: ''
    },
    kissy: {
        before: '',
        after: ''
    },
    nodejs: {
        before: '',
        after: ''
    }
};

module.exports = function (code, wrap) {
    var wrapConfig;

    if (typeof wrap == 'string') {
        wrapConfig = wrapMap[wrap];
    }
    else if (typeof wrap == 'object') {
        wrapConfig = wrap;
    }

    if (wrapConfig) {
        code = (wrapConfig.before || '') + code;
        code += (wrapConfig.after || '');
    }

    return code;
};