import { ModuleWithProviders } from '../../../node_modules/@angular/core';
import { Routes, RouterModule } from '../../../node_modules/@angular/router';
import { SecondComponent } from './app.secondComponent';

const routes: Routes = [
    {
        path: '',
        component: SecondComponent
    },
    {
        path: 'externalApp',
        component: SecondComponent,
        resolve: {
            url: 'externalUrlRedirectResolver'
        },
        data: {
            externalUrl: 'http://www.google.com'
        }
    }
];

export const secondRouting: ModuleWithProviders = RouterModule.forChild(routes);
