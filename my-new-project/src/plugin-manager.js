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