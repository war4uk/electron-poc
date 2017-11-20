import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderModule} from '../header/header.module';

import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule, HeaderModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
