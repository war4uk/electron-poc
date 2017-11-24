import { BroadcastService } from './app.broadcastService';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BroadcastModule } from "broadcast-module";
import { MessageBus } from "broadcast-module/app.messageBus"

import { FirstComponent } from './app.firstComponent';
import { firstRouting } from './app.firstRouting';

@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    BroadcastModule,
    firstRouting,
    FormsModule,
    CommonModule
  ],
  exports: [
    FirstComponent
  ],
  providers: [BroadcastService]
})
@Injectable()
export class FirstModule {
  constructor(messageBus: MessageBus, broadcastService: BroadcastService) {
    messageBus.registerChannel(broadcastService);
  }
}
