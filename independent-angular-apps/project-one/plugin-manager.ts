import { Routes } from '@angular/router';
import { MainComponent } from './src/app/modules/main/main.component';
import { UploadFileService } from './src/app/external-services/upload-file.service';

export function getRoutes(): Routes {
    return [
        { path: 'project-one', component: MainComponent }
    ];
}

export function getProviders({ files }) {
    return [
        { provide: UploadFileService, useValue: UploadFileService.forPlugins(files) } // todo
    ];
}

