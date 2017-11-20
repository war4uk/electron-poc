import { Component } from '../../../node_modules/@angular/core';
import { SafeResourceUrl } from '../../../node_modules/@angular/platform-browser/src/security/dom_sanitization_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.secondComponent.html',
  styleUrls: ['./app.secondComponent.css']
})
export class SecondComponent {
  private readonly title: string = 'Second Component';
  private readonly url: string;

  constructor() {
    this.url = './../../third-party-app/emptyApp.html';
  }
}
