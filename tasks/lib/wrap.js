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
        before: 'KISSY.add(function (S, require, exports, module) {\n module.exports = ',
        after: '});'
    },
    nodejs: {
        before: '',
        after: ''
    },
    default: {
        before: '',
        after: ''
    }
};

module.exports = function (code, opts) {
    opts = opts || {};
    var wrap = opts.wrap || 'default',
        wrapConfig;

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