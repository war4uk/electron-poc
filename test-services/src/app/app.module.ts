import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Module1Module } from './module-1/module-1.module';
import { Module2Module } from './module-2/module-2.module';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TestComponentAliasesComponent } from './test-component-aliases/test-component-aliases.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TestComponentAliasesComponent
  ],
  imports: [
    BrowserModule,
    Module1Module,
    Module2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
