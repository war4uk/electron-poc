import { BroadcastService } from './app.broadcastService';
import { NgModule, Injectable } from '../../../node_modules/@angular/core';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { CommonModule } from '../../../node_modules/@angular/common';

import { FirstComponent } from './app.firstComponent';
import { firstRouting } from './app.firstRouting';
import { BroadcastModule } from '../../../node_modules/broadcast-module';
import { MessageBus } from '../../../node_modules/broadcast-module/app.messageBus';


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
