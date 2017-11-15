const pluginConfiguration = require('./plugin.config.json');
const { toByteArray } = require('base64-js');

const filesPluginManager = require('../project-three/plugin-manager.js');

let internalBroadcastChannel = new BroadcastChannel(pluginConfiguration.pluginSpecificChannelId);

internalBroadcastChannel.onmessage = function onInternalBroadcastMessage(message) {
    console.log('Project one got event from internal channel:', message.data);
    if (message.data.type === 'file:upload:blob') {
        filesPluginManager.uploadBlob(toByteArray(message.data.content), message.data.id)
            .then(() => {
                console.log('promise resolved, sending complete event');
                internalBroadcastChannel.postMessage(Object.assign({}, message.data, { type: 'file:upload:blob:complete' }));
            });
    }
}

exports.prettyName = 'Package One';

exports.run = function run() {};

exports.getRootUrl = function getRootUrl() {
    return './project-one/dist/index.html';
};