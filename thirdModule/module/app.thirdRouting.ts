import { ModuleWithProviders } from '../../../node_modules/@angular/core';
import { Routes, RouterModule } from '../../../node_modules/@angular/router';
import { ThirdComponent } from './app.thirdComponent';

const routes: Routes = [
    {
        path: '',
        component: ThirdComponent
    }
];

export const thirdRouting: ModuleWithProviders = RouterModule.forChild(routes);
