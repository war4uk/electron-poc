import { Component } from '@angular/core';

// https://hackernoon.com/import-json-into-typescript-8d465beded79
import pluginConfiguration from '../../plugin.config.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor() {
    console.log('1', pluginConfiguration.pluginSpecificChannelId);
    let internalBroadcastChannel = new (<any>window).BroadcastChannel(pluginConfiguration.pluginSpecificChannelId);
    internalBroadcastChannel.postMessage('Hello from project one');
  }
}
