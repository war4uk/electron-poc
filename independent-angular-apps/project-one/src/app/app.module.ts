import {FileUploadServiceMock} from './mocks/fileUploadServiceMock';
import { CommonModule } from '@angular/common';
import { MainComponent } from './modules/main/main.component';
import { HeaderModule } from './modules/header/header.module';
import { MainModule } from './modules/main/main.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ServicesModule } from './../externalServices/services.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HeaderModule,
    ServicesModule,
    MainModule
  ],
  providers: [{
    provide: 'FileUploadService',
    useClass: FileUploadServiceMock
  }],
  bootstrap: [MainComponent]
})
export class AppModule { }
