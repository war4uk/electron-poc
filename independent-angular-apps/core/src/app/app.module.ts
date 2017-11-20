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
  ...getProjectOneRoutes(),
  ...getProjectTwoRoutes(),
  { path: '**', redirectTo: getProjectOneRoutes()[0].path, pathMatch: 'full' }
];

console.log(appRoutes);

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
    ProjectOneModule, ProjectTwoModule
  ],
  providers: [{ provide: APP_ROUTES, useValue: appRoutes }],
  bootstrap: [AppComponent]
})
export class AppModule { }
