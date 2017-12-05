import { NgModule } from '@angular/core';
import { MainModule, PluginManager } from 'project-two';

import { pluginManagers } from './plugin-managers';

@NgModule({
  imports: [
    MainModule
  ],
  providers: PluginManager.getProviders(pluginManagers)
})
export class ProjectTwoLazyLoader { }

