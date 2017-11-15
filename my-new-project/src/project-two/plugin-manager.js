let internalBroadcastChannel = new BroadcastChannel("unite:project-two:channel");

internalBroadcastChannel.onmessage = function onInternalBroadcastMessage(message) {}

exports.prettyName = 'Package Two';

exports.run = function run(broadcastChannelId) {};

exports.getRootUrl = function getRootUrl() {
    return './project-two/index.html';
};