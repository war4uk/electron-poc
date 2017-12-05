import {NgModule} from '@angular/core';
import {Logger} from './logger.service';
import {CallServiceImpl} from './call.service';
import {CALL_SERVICE, LOGGER_SERVICE} from 'project-one-typings';

@NgModule({
    declarations: [],
    imports: [],
    providers: [{
      provide: LOGGER_SERVICE,
      useClass: Logger
    }, {
      provide: CALL_SERVICE,
      useClass: CallServiceImpl
    }]
  })
  export class ServicesModule { }
