import { Component } from '@angular/core';
import ComponentLink = Model.ComponentLink;

// https://hackernoon.com/import-json-into-typescript-8d465beded79
import pluginConfiguration from '../../plugin.config.json';

@Component({
  selector: 'app-first-component',
  templateUrl: './component.view.html',
  styleUrls: ['./app.component.css']
})
export class FirstComponent {
    private readonly internalBroadcastChannel;

    public readonly title = 'first';
    public readonly links: ReadonlyArray<ComponentLink>;
    public message: string;

    constructor() {
      this.internalBroadcastChannel = new (<any>window).BroadcastChannel(pluginConfiguration.pluginSpecificChannelId);
      this.internalBroadcastChannel.postMessage('Hello from first component');

      const initialLinks = [{
        href: 'https://angular.io/tutorial',
        title: 'Tour of Heroes'
      }, {
        href: 'https://github.com/angular/angular-cli/wiki',
        title: 'CLI Documentation'
      }, {
        href: 'https://blog.angular.io/',
        title: 'Angular blogAngular blog'
      }];
      const allLinks = [];
      for (let i = 0; i < 100; ++i) {
        allLinks.push(...initialLinks);
      }

      this.links = allLinks;
    }

    public sendMessage(): void {
      this.internalBroadcastChannel.postMessage(this.message);
    }
}
