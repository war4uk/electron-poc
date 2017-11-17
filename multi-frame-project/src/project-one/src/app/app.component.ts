import { Component } from '@angular/core';
import ComponentLink = Model.ComponentLink;

// https://hackernoon.com/import-json-into-typescript-8d465beded79
import pluginConfiguration from '../../plugin.config.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private readonly internalBroadcastChannel;

  public readonly title = 'app';
  public readonly links: ReadonlyArray<ComponentLink>;
  public message: string;

  constructor() {
    this.internalBroadcastChannel = new (<any>window).BroadcastChannel(pluginConfiguration.pluginSpecificChannelId);
    this.internalBroadcastChannel.postMessage('Hello from project one');
  }
}
