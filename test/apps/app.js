var logger = require("./lib/logger");

module.exports.status = function (){
  return logger.log();
};