import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ThirdComponent } from './app.thirdComponent';
import { thirdRouting } from './app.thirdRouting';


@NgModule({
  declarations: [
    ThirdComponent
  ],
  imports: [
    thirdRouting, CommonModule
  ],
  exports: [
    ThirdComponent
  ],
  providers: []
})
export class ThirdModule { }
