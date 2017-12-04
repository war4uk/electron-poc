import { Component, Inject, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import {APP_ROUTES} from './app.routes';
import {CallProxyService} from './services/callProxy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public callNumber?: number;

  public readonly flag: boolean = false;

  public readonly title: string = 'app';

  constructor(
      @Inject(APP_ROUTES) public readonly routes: Routes,
      private readonly callService: CallProxyService) {
    console.log(routes);
  }

  public ngOnInit(): void {
    this.callService.onDialogStarted().subscribe((callNum: number) => {
      this.callNumber = callNum;
    });
    this.callService.onDialogFinished().subscribe(() => {
      this.callNumber = null;
    });
  }
}
