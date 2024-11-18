const ValidationError = require('./validation-error');

class MaximumLengthExceededError extends ValidationError {
  constructor(lengthDifference = null, ...params) {
    super(...params);

    this.name = "MaximumLengthExceededError";

    if(lengthDifference !== null) {
      this.message = `Maximum length exceeded by ${lengthDifference}`;
    } else {
      this.message = "Maximum length exceeded";
    }
   
  }
}

// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}