import { Observable } from 'rxjs/Observable';
import { Routes } from '@angular/router';
import { MainComponent } from './src/app/modules/main/main.component';


export function getRoutes(): Routes {
    return [
        { path: 'project-two', component: MainComponent }
    ];
}

export function getProviders({ }) {
    return [];
}

