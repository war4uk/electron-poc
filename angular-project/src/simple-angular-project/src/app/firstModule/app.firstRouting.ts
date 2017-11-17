import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './app.firstComponent';

const routes: Routes = [
    {
        path: '',
        component: FirstComponent
    }
];

export const firstRouting: ModuleWithProviders = RouterModule.forChild(routes);
