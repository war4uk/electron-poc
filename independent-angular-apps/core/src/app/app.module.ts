import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { PluginManager as ProjectOnePluginManager, ServicesModule } from 'project-one';
import { PluginManager as ProjectTwoPluginManager } from 'project-two';
import { AppPlugin, PluginNames } from 'typings-package';

import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import {resolve} from 'q';

const appRoutes: Routes = [
  { path: 'project-one', loadChildren: './route-loaders/project-one-route-loader#ProjectOneLazyLoader' },
  { path: 'project-two', loadChildren: './route-loaders/project-two-route-loader#ProjectTwoLazyLoader' },
  { path: '**', component: DefaultComponent }
];

@NgModule({
  declarations: [
    AppComponent, DefaultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    ServicesModule
  ],
  providers: [{
    provide: APP_ROUTES,
    useValue: appRoutes
  }, {
    provide: APP_INITIALIZER,
    useFactory: () => {
      const managers = new Map<string, AppPlugin>();
      managers.set(PluginNames.First, new ProjectOnePluginManager());
      managers.set(PluginNames.Second, new ProjectTwoPluginManager());

      const pluginManagers = [managers.get(PluginNames.First), managers.get(PluginNames.Second)];

      for (const manager of pluginManagers) {
        manager.initialize(managers);
      }
    },
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppCoreModule {
}
