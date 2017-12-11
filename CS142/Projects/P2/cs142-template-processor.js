"use strict"
// @mhd53
// CS142 Project 2: JavaScript Calisthenics

function Cs142TemplateProcessor(template) {
	// Memeber Variables
	this.template = template;


	Cs142TemplateProcessor.prototype.fillIn = function(dictionary) {
		/* When invoked with an argument of a 'dictionary' object:
		   Returns: a string with the this.template fille with values from the
		   dictionary object. */ 

		   // Variables and Constants
		   var properties = dictionary.keys();
		   var values = dictionary.values();
		   var re = /{{([^}}]+)}}/g; // general regular exp 
		   var regExp = new RegExp("{{(" + property + ")}}"); // specific regular exp
		   var matches = this.template.match(re);

		   for (var i = 0; i < matches.length; i++) {
		   		/* If property is in template, replaces it with 
		   		   it's corresponding value. 
		   		   Else, replace undefined property with white space. */  
		   		currentProperty = keys[i];
		   		correspondingValue = values[i];
		   		var regExp = new RegExp("{{(" + currentProperty + ")}}"); // specific regular exp
		   		if (reqExp.test(this.template)) {
		   			this.template.replace(regExp, correspondingValue);
		   		} else {
		   			var regExp = new RegExp("{{(" + mathces[i] + ")}}"); // specific regular exp
		   			this.template.replace(regExp, "");
		   		}
		   }
	}
}