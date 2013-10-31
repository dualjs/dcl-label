/*
 * dcl-label
 * https://github.com/dualjs/dcl-label
 *
 * Copyright (c) 2013 Mark
 * Licensed under the MIT license.
 */

var D = require('dual');
var bsAttrs = require('dcl-bootstrap-attributes');
require('dcl-bootstrap');

module.exports = D.Widget
    .extend(bsAttrs.utils)
    .extend({
        ATTRS: {
            caption: {
                textAsset: 'root'
            },
            look: {
                cssClass: {
                    'default': 'label-default',
                    'primary': 'label-primary',
                    'success': 'label-success',
                    'info': 'label-info',
                    'warning': 'label-warning',
                    'danger': 'label-danger'
                },
                cssClassAsset: 'root',
                init: 'default'
            }
        },

        initStructure: function() {
            this.$ = D.fromJSON([
                'span', {
                    'class': 'label',
                    'ui:asset': 'root'
                }
            ]);
        }
    });