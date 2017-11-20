import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainModule as ProjectOneModule, PluginManager as ProjectOnePluginManager } from 'project-one';
import { MainModule as ProjectTwoModule, PluginManager as ProjectTwoPluginManager } from 'project-two';

import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';

const { getRoutes: getProjectOneRoutes } = ProjectOnePluginManager;
const { getRoutes: getProjectTwoRoutes } = ProjectTwoPluginManager;

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
    ProjectOneModule, ProjectTwoModule
  ],
  providers: [{ provide: APP_ROUTES, useValue: appRoutes }],
  bootstrap: [AppComponent]
})
export class AppCoreModule {
  pluginManagers = [];

  constructor() {
    ProjectOnePluginManager.initialize(ProjectTwoPluginManager);
    
    this.pluginManagers.push(ProjectOnePluginManager, ProjectTwoPluginManager);
  }
}
