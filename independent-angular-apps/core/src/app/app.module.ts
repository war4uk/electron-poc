import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule, PluginManager } from 'project-one';

import {APP_ROUTES} from './app.routes';
import { AppComponent } from './app.component';
import {DefaultComponent} from './default/default.component';

const { getRoutes: getProjectOneRoutes } = PluginManager;

const appRoutes: Routes = [
  { path: '', component: DefaultComponent, pathMatch: 'full' },
  ...getProjectOneRoutes()
];

@NgModule({
  declarations: [
    AppComponent, DefaultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    PagesModule
  ],
  providers: [{ provide: APP_ROUTES, useValue: appRoutes }],
  bootstrap: [AppComponent]
})
export class AppModule { }
