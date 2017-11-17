import { BroadcastService } from './app.broadcastService';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FirstComponent } from './app.firstComponent';
import { firstRouting } from './app.firstRouting';
import { BroadcastModule } from '../broadcastModule/app.broadcastModule';
import { MessageBus } from '../broadcastModule/app.messageBus';


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
