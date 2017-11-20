import { BroadcastModule } from '../../../node_modules/broadcast-module';
import { MessageBus } from '../../../node_modules/broadcast-module/app.messageBus';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { NgModule, Injectable } from '../../../node_modules/@angular/core';
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
