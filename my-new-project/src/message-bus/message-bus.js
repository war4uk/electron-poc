const openedWindows = Object.create(null);

exports.registerInMessageBus = function registerInMessageBus(id, windowHandle) {
  openedWindows[id] = windowHandle;
};

exports.initializeMessaging = function initializeMessaging(id) {
  openedWindows[id].webContents.executeJavaScript('alert("here we are!")');
};
