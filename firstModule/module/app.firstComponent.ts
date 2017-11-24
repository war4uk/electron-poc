import { BroadcastService } from './app.broadcastService';
import { Component, Injectable } from '@angular/core';
import { ComponentLink } from './componentLink';

@Component({
  selector: 'app-root',
  templateUrl: './app.firstComponent.html',
  styleUrls: ['./app.firstComponent.css']
})
@Injectable()
export class FirstComponent {
  public readonly title: string = 'First Component';
  public readonly links: ComponentLink[];

  public link: string;
  public linkName: string;

  constructor(broadcastService: BroadcastService) {
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

    this.links = [];
    for (let i = 0; i < 100; ++i) {
      this.links.push(...initialLinks);
    }

    broadcastService.postMessage('hello from frist module component');
  }

  public appendLink(): void {
    if (this.link && this.linkName) {
      this.links.push({
        href: this.link,
        title: this.linkName
      });
      this.link = "";
      this.linkName = "";
    }
  }
}
