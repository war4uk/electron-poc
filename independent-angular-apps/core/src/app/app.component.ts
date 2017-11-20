import { Component, Inject } from '@angular/core';
import { Routes } from '@angular/router';

import {APP_ROUTES} from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(APP_ROUTES) private routes: Routes) {
    console.log(routes);

  }
  title = 'app';
}
