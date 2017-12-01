import {NgModule} from '@angular/core';
import {FileUpload} from './fileUpload';

@NgModule({
    declarations: [],
    imports: [],
    providers: [{
      provide: 'FileUploadService',
      useClass: FileUpload
    }]
  })
  export class ServicesModule { }
