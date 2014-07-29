var Formatter = function(){}

module.exports = new Formatter();

Formatter.prototype.format = function(message) {
  return message.toUpperCase();
};