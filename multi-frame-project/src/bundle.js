(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const broadcastChannelId = 'unite:channelId';
// broadcast channel has poor browser support, used just for poc https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API
// but there is polyfill made via localStorage - https://gist.github.com/inexorabletash/52f437d1451d12145264

const managers = [
    require('./project-one/plugin-manager.js'),
    require('./project-two/plugin-manager.js'),
    require('./project-three/plugin-manager.js')
];

const menuContainer = window.document.getElementById('MenuContainer');

managers.forEach(manager => {
    const element = window.document.createElement('a');
    element.innerText = manager.prettyName;
    element.onclick = function() { window.document.getElementById('mainWindow').src = manager.getRootUrl(); };
    menuContainer.appendChild(element);

    manager.run(broadcastChannelId);
});

window.document.getElementById('mainWindow').src = Object.values(managers)[0].getRootUrl();


var bc = new BroadcastChannel(broadcastChannelId);
bc.onmessage = function(message) {
    console.log('Plugin manager received data from global channel: ', message.data);
};
},{"./project-one/plugin-manager.js":2,"./project-three/plugin-manager.js":4,"./project-two/plugin-manager.js":5}],2:[function(require,module,exports){
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
},{"./plugin.config.json":3}],3:[function(require,module,exports){
module.exports={
    "pluginSpecificChannelId": "project-one:channel"
}
},{}],4:[function(require,module,exports){
let globalBroadcastChannel;

let internalBroadcastChannel = new BroadcastChannel("unite:project-three:channel");

internalBroadcastChannel.onmessage = function onInternalBroadcastMessage(message) {
    if (globalBroadcastChannel) {
        globalBroadcastChannel.postMessage(message.data);
    }
}

exports.prettyName = 'Package Three';

exports.run = function run(broadcastChannelId) {
    globalBroadcastChannel = new BroadcastChannel(broadcastChannelId);

    globalBroadcastChannel.onmessage = function(message) {
        console.log('Project three got event from global channel:', message.data);
    };
};

exports.getRootUrl = function getRootUrl() {
    return './project-three/index.html';
};
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
require('./plugin-manager');
},{"./plugin-manager":1}]},{},[6]);
