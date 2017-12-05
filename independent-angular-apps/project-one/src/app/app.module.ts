import { CommonModule } from '@angular/common';
import { MainComponent } from './modules/main/main.component';
import { MainModule } from './modules/main/main.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { getProviders } from '../../plugin-manager';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MainModule
  ],
  providers: getProviders({ files: {/*files plugin mock*/ } }),

  bootstrap: [MainComponent]
})
export class AppModule { }
