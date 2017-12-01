import {NgModule} from '@angular/core';
import {Logger} from './logger.service';

@NgModule({
    declarations: [],
    imports: [],
    providers: [{
      provide: 'LoggerService',
      useClass: Logger
    }]
  })
  export class ServicesModule { }
