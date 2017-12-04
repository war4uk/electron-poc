import {FileUploadServiceProxy} from '../services/fileUploadServiceProxy';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';

import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', component: MainComponent }
];

@NgModule({
  imports: [
    CommonModule, HeaderModule, FormsModule, RouterModule.forChild(routes)
  ],
  providers: [FileUploadServiceProxy],
  declarations: [MainComponent]
})
export class MainModule { }
