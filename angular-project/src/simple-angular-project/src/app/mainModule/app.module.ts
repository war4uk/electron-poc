import { BroadcastModule } from '../broadcastModule/app.broadcastModule';
import { MessageBus } from '../broadcastModule/app.messageBus';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import pluginConfiguration from './mainplugin.config.json';


import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { BroadcastService } from './app.broadcastService';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BroadcastModule,
    routing
  ],
  providers: [BroadcastService],
  bootstrap: [
    AppComponent
  ]
})
@Injectable()
export class AppModule {
  constructor(messageBus: MessageBus, broadcastService: BroadcastService) {
    messageBus.registerChannel(broadcastService);
    broadcastService.postMessage('hello from main module init');
  }
}
