/*jshint browser:true*/
var D = require('dual');
var Label = require('./');

var demo = D.fromJSON(['div', [
	['label', {
		caption: 'Hello world!'
	}],
	['label', {
		caption: 'One',
		look: 'primary'
	}],
	['label', {
		caption: 'Two',
		look: 'warning'
	}],
	['label', {
		caption: 'Three',
		look: 'danger'
	}]
]], {
	'label': Label
});


document.body.appendChild(demo.domify());