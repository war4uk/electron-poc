import { Observable } from 'rxjs/Observable';
import { Routes } from '@angular/router';
import { MainComponent } from './src/app/modules/main/main.component';


import { UploadFileService } from './src/app/modules/main/services/upload-file.service';

export function uploadFile(file: File, id: string): Observable<number> {
    console.log('uploadFile called', file, id);
    return (new UploadFileService()).uploadFile(file, id);
}


export function getRoutes(): Routes {
    return [
        { path: 'project-two', component: MainComponent }
    ];
}
