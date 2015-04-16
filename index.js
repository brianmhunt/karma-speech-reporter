var say = require('say')

var SpeechReporter = function(baseReporterDecorator) {
	baseReporterDecorator(this);

	this.onSpecComplete = this.writeCommonMsg = function() { };

  this.onRunComplete = function(browsers, results) {
    if (browsers.length > 1 && !results.error && !results.disconnected) {
      if (results.failed) {
        say.speak(null, "" + results.failed + " tests failed.")
      } else {
        // TODO: Say something on pass?
      }
    } else if (results.error) {
      say.speak(null, "An error occurred.")
    } else if (results.disconnected) {
      say.speak(null, "Browser disconnected.")
    }
	};
};

SpeechReporter.$inject = ['baseReporterDecorator'];

module.exports = {
	'reporter:speech': ['type', SpeechReporter]
};
