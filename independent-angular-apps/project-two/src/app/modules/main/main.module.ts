import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FakesModule } from '../fakes/fakes.module';
import { MainComponent } from './main.component';

import { UploadFileService } from './services/upload-file.service';

const routes: Routes = [
  { path: '', component: MainComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes), FakesModule
  ],
  exports: [MainComponent],
  declarations: [MainComponent],
  providers: [UploadFileService]
})
export class MainModule { }
