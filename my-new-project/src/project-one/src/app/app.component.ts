import { Component, ChangeDetectorRef } from '@angular/core';

(function (global) {
  var channels = [];

  function BroadcastChannel(channel) {
    var $this = this;
    channel = String(channel);

    var id = '$BroadcastChannel$' + channel + '$';

    channels[id] = channels[id] || [];
    channels[id].push(this);

    this._name = channel;
    this._id = id;
    this._closed = false;
    this._mc = new MessageChannel();
    this._mc.port1.start();
    this._mc.port2.start();

    global.addEventListener('storage', function (e) {
      if (e.storageArea !== global.localStorage) return;
      if (e.newValue === null) return;
      if (e.key.substring(0, id.length) !== id) return;
      var data = JSON.parse(e.newValue);
      $this._mc.port2.postMessage(data);
    });
  }

  BroadcastChannel.prototype = {
    // BroadcastChannel API
    get name() { return this._name; },
    postMessage: function (message) {
      var $this = this;
      if (this._closed) {
        var e = new Error();
        e.name = 'InvalidStateError';
        throw e;
      }
      var value = JSON.stringify(message);

      // Broadcast to other contexts via storage events...
      var key = this._id + String(Date.now()) + '$' + String(Math.random());
      global.localStorage.setItem(key, value);
      setTimeout(function () { global.localStorage.removeItem(key); }, 500);

      // Broadcast to current context via ports
      channels[this._id].forEach(function (bc) {
        if (bc === $this) return;
        bc._mc.port2.postMessage(JSON.parse(value));
      });
    },
    close: function () {
      if (this._closed) return;
      this._closed = true;
      this._mc.port1.close();
      this._mc.port2.close();

      var index = channels[this._id].indexOf(this);
      channels[this._id].splice(index, 1);
    },

    // EventTarget API
    get onmessage() { return this._mc.port1.onmessage; },
    set onmessage(value) { this._mc.port1.onmessage = value; },
    addEventListener: function (type, listener /*, useCapture*/) {
      return this._mc.port1.addEventListener.apply(this._mc.port1, arguments);
    },
    removeEventListener: function (type, listener /*, useCapture*/) {
      return this._mc.port1.removeEventListener.apply(this._mc.port1, arguments);
    },
    dispatchEvent: function (event) {
      return this._mc.port1.dispatchEvent.apply(this._mc.port1, arguments);
    }
  };

  (<any>global).BroadcastChannel = (<any>global).BroadcastChannel || BroadcastChannel;
}(self));

// https://hackernoon.com/import-json-into-typescript-8d465beded79
import pluginConfiguration from '../../plugin.config.json';

import { fromByteArray } from 'base64-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  blobSize = 1000;
  internalBroadcastChannel = null;

  currentFiles = {};

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.internalBroadcastChannel = new (<any>window).BroadcastChannel(pluginConfiguration.pluginSpecificChannelId);
    this.internalBroadcastChannel.postMessage('Hello from project one');

    this.internalBroadcastChannel.onmessage = message => {
      if (message.data.type === "file:upload:blob:complete") {
        console.log('project 1 got chunk complete event');
        this.readNextChunkFromFile(message.data.id);
      }
    };
  }

  getCurrentFiles() {
    return Object.keys(this.currentFiles).map(key => this.currentFiles[key]);
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      file.innerId = Math.floor(Math.random() * 10000);
      this.configureUploadForFile(file);
    }
  }

  configureUploadForFile(file: any) {
    this.currentFiles[file.innerId] = { file, offset: 0 };

    this.readNextChunkFromFile(file.innerId);
  }

  readNextChunkFromFile(id) {
    const file = this.currentFiles[id].file;
    const offset = this.currentFiles[id].offset;

    if (offset > file.size) {
      return;
    }

    const reader = new FileReader();
    let endIndex = Math.min(file.size, offset + this.blobSize);
    let blob = file.slice(offset, endIndex);
    reader.readAsArrayBuffer(blob);
    this.currentFiles[id].offset = offset + this.blobSize;
    this.changeDetectorRef.detectChanges();


    reader.onload = (event) => {
      console.log(`project one loaded ${id} file chunk content result: `, (<FileReader>event.target).result);
      const content = fromByteArray(new Uint8Array((<FileReader>event.target).result));
      this.internalBroadcastChannel.postMessage({
        type: 'file:upload:blob',
        id: id,
        content
      });
    };
  }
}
