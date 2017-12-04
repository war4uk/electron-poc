import {NgModule} from '@angular/core';
import {Logger} from './logger.service';
import {CallServiceImpl} from './call.service';

@NgModule({
    declarations: [],
    imports: [],
    providers: [{
      provide: 'LoggerService',
      useClass: Logger
    }, {
      provide: 'CallService',
      useClass: CallServiceImpl
    }]
  })
  export class ServicesModule { }
