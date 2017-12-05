import {NgModule} from '@angular/core';
import {FileUpload} from './fileUpload';
import {FILE_UPLOAD_SERVICE} from 'project-two-typings';

@NgModule({
    declarations: [],
    imports: [],
    providers: [{
      provide: FILE_UPLOAD_SERVICE,
      useClass: FileUpload
    }]
  })
  export class ServicesModule { }
