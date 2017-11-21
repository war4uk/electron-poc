import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainModule } from './modules/main/main.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
