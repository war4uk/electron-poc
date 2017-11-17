import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
