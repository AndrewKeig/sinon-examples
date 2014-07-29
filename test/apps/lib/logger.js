var Logger = function(){}

module.exports = new Logger();

Logger.prototype.log = function(message) {
  return "Info: logging a message";
};