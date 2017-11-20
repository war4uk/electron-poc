import { Routes } from '@angular/router';
import { MainComponent } from './src/app/modules/main/main.component';

export function callAlert() {
    alert('done');
}


export function getRoutes(): Routes {
    return [
        { path: 'project-two', component: MainComponent }
    ];
}
