import { Observable } from 'rxjs/Observable';
import { Routes } from '@angular/router';
import { MainComponent } from './src/app/modules/main/main.component';
import { AppPlugin, FirstPlugin, SecondPlugin, PluginNames } from 'typings-package';

import { UploadFileService } from './src/app/modules/main/services/upload-file.service';

export class PluginManager implements SecondPlugin {
    uploadFile(file: File, id: string): Observable<number> {
        console.log('uploadFile called', file, id);
        return (new UploadFileService()).uploadFile(file, id);
    }
    initialize(plugins: Map<string, AppPlugin>) {
        const firstPlugin = plugins.get(PluginNames.First);
        console.log('First plugin called from second plugin on init', firstPlugin);
    }

    getRoutes(): Routes {
        return [
            { path: 'project-two', component: MainComponent }
        ];
    }
}
