import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';

import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', component: MainComponent }
];

@NgModule({
  imports: [
    CommonModule, HeaderModule, RouterModule.forChild(routes)
  ],
  declarations: [MainComponent]
})
export class MainModule { }
