import { Component } from '@angular/core';
import ComponentLink = Model.ComponentLink;

// https://hackernoon.com/import-json-into-typescript-8d465beded79
import pluginConfiguration from '../../plugin.config.json';

@Component({
  selector: 'app-second-component',
  templateUrl: './component.view.html',
  styleUrls: ['./app.component.css']
})
export class SecondComponent {
    private readonly internalBroadcastChannel;

    public readonly title = 'second';
    public readonly links: ReadonlyArray<ComponentLink>;
    public message: string;

    constructor() {
      this.internalBroadcastChannel = new (<any>window).BroadcastChannel(pluginConfiguration.pluginSpecificChannelId);
      this.internalBroadcastChannel.postMessage('Hello from second component');

      const initialLinks = [{
        href: 'https://blog.angular.io/',
        title: 'Angular blogAngular blog'
      }, {
        href: 'https://github.com/angular/angular-cli/wiki',
        title: 'CLI Documentation'
      }, {
        href: 'https://angular.io/tutorial',
        title: 'Tour of Heroes'
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
