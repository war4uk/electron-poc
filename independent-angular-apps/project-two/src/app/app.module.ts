import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainModule } from './modules/main/main.module';

import { AppComponent } from './app.component';
import {LoggerMock} from './modules/mocks/logger.mock';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MainModule
  ],
  providers: [{
    provide: 'LoggerService',
    useClass: LoggerMock
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
