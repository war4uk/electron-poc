import { NgModule } from '../../../node_modules/@angular/core';
import { CommonModule } from '../../../node_modules/@angular/common';


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
