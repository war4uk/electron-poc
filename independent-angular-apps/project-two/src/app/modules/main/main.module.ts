import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

import { UploadFileService } from './services/upload-file.service';

const routes: Routes = [
  { path: '', component: MainComponent }
];


@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [MainComponent],
  declarations: [MainComponent],
  providers: [UploadFileService]
})
export class MainModule { }
