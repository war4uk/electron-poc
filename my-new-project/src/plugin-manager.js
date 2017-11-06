import { BrowserWindow } from 'electron';

const managers = Object.create(null);

const pluginList = require('./plugins.json');

const menuContainer = window.document.getElementById('MenuContainer');

Object.keys(pluginList).forEach(key => {
  const manager = require(`./${key}/plugin-manager.js`);

  const element = window.document.createElement('a');
  element.innerText = key;
  element.onclick = function () { window.document.getElementById('mainWindow').src = manager.getRootUrl(); };
  menuContainer.appendChild(element);

  manager.run();

  managers[key] = manager;
});

window.document.getElementById('mainWindow').src = Object.values(managers)[0].getRootUrl();


var bc = new BroadcastChannel('preview:compiled');
bc.onmessage = function (message) {
  console.log(message.data);
};
