var say = require('say')

var SpeechReporter = function(baseReporterDecorator) {
	baseReporterDecorator(this);

	this.onSpecComplete = this.writeCommonMsg = function() { };

  this.onRunComplete = function(browsers, results) {
		if (results.failed || results.error) {
			say.speak(null, "" + results.failed + " tests failed, " + results.error + " test errors.")
		}
	};
};

SpeechReporter.$inject = ['baseReporterDecorator'];

module.exports = {
	'reporter:speech': ['type', SpeechReporter]
};
