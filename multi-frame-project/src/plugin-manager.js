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
    const frame = window.document.createElement('iframe');
    const element = window.document.createElement('a');

    frame.setAttribute("src", manager.getRootUrl());
    frame.setAttribute("width", "800");
    frame.setAttribute("height", "600");
    frame.setAttribute("id", manager.id);

    element.innerText = manager.prettyName;
    element.onclick = function () {
        const previousActive = window.document.getElementsByClassName("active")[0];

        previousActive.removeAttribute("class");
        frame.setAttribute("class", "active");
    };
    menuContainer.appendChild(element);
    menuContainer.parentNode.insertBefore(frame, menuContainer.nextSibling);

    manager.run(broadcastChannelId);
});

var initialFrame = window.document.getElementById(Object.values(managers)[0].id);
initialFrame.setAttribute("class", "active");


var bc = new BroadcastChannel(broadcastChannelId);
bc.onmessage = function(message) {
    console.log('Plugin manager received data from global channel: ', message.data);
};