const pluginConfiguration = require('./plugin.config.json');
let globalBroadcastChannel;

let internalBroadcastChannel = new BroadcastChannel(pluginConfiguration.pluginSpecificChannelId);

internalBroadcastChannel.onmessage = function onInternalBroadcastMessage(message) {
    if (globalBroadcastChannel) {
        globalBroadcastChannel.postMessage(message.data);
    }
}

exports.prettyName = 'Package One';

exports.run = function run(broadcastChannelId) {
    globalBroadcastChannel = new BroadcastChannel(broadcastChannelId);

    globalBroadcastChannel.onmessage = function(message) {
        console.log('Project one got event from global channel:', message.data);
    };
};

exports.getRootUrl = function getRootUrl() {
    return './project-one/dist/index.html';
};