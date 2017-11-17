import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'first',
        pathMatch: 'full'
    },
    {
        path: 'first',
        loadChildren: '../firstModule/app.firstModule#FirstModule'
    },
    {
        path: 'second',
        loadChildren: '../secondModule/app.secondModule#SecondModule'
    },
    {
        path: 'third',
        loadChildren: '../thirdModule/app.thirdModule#ThirdModule'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
