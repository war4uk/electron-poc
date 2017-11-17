import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThirdComponent } from './app.thirdComponent';

const routes: Routes = [
    {
        path: '',
        component: ThirdComponent
    }
];

export const thirdRouting: ModuleWithProviders = RouterModule.forChild(routes);
