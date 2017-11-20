import { CommonModule } from '@angular/common';
import { MainComponent } from './modules/main/main.component';
import { HeaderModule } from './modules/header/header.module';
import { MainModule } from './modules/main/main.module';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MainModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
