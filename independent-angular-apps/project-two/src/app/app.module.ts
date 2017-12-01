import {LoggerMock} from '../mocks/logger.mock';
import {ServicesModule} from '../externalServices/services.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainModule } from './modules/main/main.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MainModule, ServicesModule
  ],
  providers: [{
    provide: 'LoggerService',
    useClass: LoggerMock
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
