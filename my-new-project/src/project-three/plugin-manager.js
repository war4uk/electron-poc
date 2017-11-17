let internalBroadcastChannel = new BroadcastChannel("unite:project-three:channel");

internalBroadcastChannel.onmessage = function onInternalBroadcastMessage() {}

exports.prettyName = "Package Three";

exports.uploadBlob = function(uint8Arr, fileId) {
    console.log('project three loaded file content result: ', arrayBufferToString(uint8Arr));

    return new Promise((acc) => {
        setTimeout(function() {
            console.log('three seconds busy emulation passed, complete upload');
            acc();
        }, 3000);
    });
}

exports.run = function run(broadcastChannelId) {};

exports.getRootUrl = function getRootUrl() {
    return './project-three/index.html';
};


function arrayBufferToString(buffer) {
    // extremely unefficient implementation
    return String.fromCharCode.apply(String, buffer);
}
