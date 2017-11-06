let cb = function () { };

exports.subscribe = function subscribe(callBack) {
  cb = callBack;
};


exports.sendEvent = function sendEvent(event) {
  return true;
};

exports.run = function run() {
  alert(5000);
};

exports.getRootUrl = function getRootUrl() {
  return "http://localhost:4200";
};
