let globalBroadcastChannel;

let internalBroadcastChannel = new BroadcastChannel("unite:project-two:channel");

internalBroadcastChannel.onmessage = function onInternalBroadcastMessage(message) {
    if (globalBroadcastChannel) {
        globalBroadcastChannel.postMessage(message.data);
    }
}

exports.prettyName = 'Package Two';

exports.run = function run(broadcastChannelId) {
    globalBroadcastChannel = new BroadcastChannel(broadcastChannelId);

    globalBroadcastChannel.onmessage = function(message) {
        console.log('Project two got event from global channel:', message.data);
    };
};

exports.getRootUrl = function getRootUrl() {
    return './project-two/index.html';
};