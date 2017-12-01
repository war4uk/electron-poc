import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';

import { MainComponent } from './main.component';
import { ProjectOneComponentComponent } from './project-one-component/project-one-component.component';

const routes: Routes = [
  { path: '', component: MainComponent }
];

@NgModule({
  imports: [
    CommonModule, HeaderModule, RouterModule.forChild(routes)
  ],
  exports: [ProjectOneComponentComponent],
  declarations: [MainComponent, ProjectOneComponentComponent]
})
export class MainModule { }
