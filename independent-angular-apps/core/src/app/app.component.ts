import { Component, Inject, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import {APP_ROUTES} from './app.routes';
import {CallProxyService} from './services/callProxy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public readonly flag: boolean = false;

  public readonly title: string = 'app';

  constructor(
      @Inject(APP_ROUTES) public readonly routes: Routes) {
    console.log(routes);
  }
}
