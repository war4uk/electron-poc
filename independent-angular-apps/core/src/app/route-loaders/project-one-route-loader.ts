import { NgModule } from '@angular/core';
import { MainModule, PluginManager } from 'project-one';

import { pluginManagers } from './public_plugin_interfaces';

@NgModule({
  imports: [
    MainModule, 
  ],
  providers: PluginManager.getProviders(pluginManagers)
})
export class ProjectOneLazyLoader { }
