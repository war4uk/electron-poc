import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectOneComponentComponent } from './project-one-component/project-one-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ProjectOneComponentComponent
  ],
  declarations: [ProjectOneComponentComponent]
})
export class FakesModule { }
