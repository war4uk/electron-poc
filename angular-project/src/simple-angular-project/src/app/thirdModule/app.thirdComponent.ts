import { Component } from '../../../node_modules/@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.thirdComponent.html',
  styleUrls: ['./app.thirdComponent.css']
})
export class ThirdComponent {
  public readonly title: string = 'Third Component';
  public readonly list: string[];

  constructor () {
    this.list = [];
    for (let i = 0; i < 100000; ++i) {
      this.list.push('Element #' + i);
    }
  }
}
