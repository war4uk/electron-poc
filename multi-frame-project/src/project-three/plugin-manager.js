let globalBroadcastChannel;

let internalBroadcastChannel = new BroadcastChannel("unite:project-three:channel");

internalBroadcastChannel.onmessage = function onInternalBroadcastMessage (message) {
    if (globalBroadcastChannel) {
        globalBroadcastChannel.postMessage(message.data);
    }
}

exports.id = 'package_three';

exports.prettyName = "Package Three";

exports.run = function run(broadcastChannelId) {
    globalBroadcastChannel = new BroadcastChannel(broadcastChannelId);

    globalBroadcastChannel.onmessage = function(message) {
        console.log("Project three got event from global channel:", message.data);
    };
};

exports.getRootUrl = function getRootUrl() {
    return "./project-three/index.html";
};
