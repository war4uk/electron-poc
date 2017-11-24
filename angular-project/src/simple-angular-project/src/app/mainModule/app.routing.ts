import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from 'zzzzz-first-module/app.firstComponent';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'first',
        pathMatch: 'full'
    },
    {
        path: 'first',
        component: FirstComponent
        // loadChildren: 'xx-first-module#FirstModule'
    },
    // {
    //     path: 'second',
    //     loadChildren: '../secondModule/app.secondModule#SecondModule'
    // },
    // {
    //     path: 'third',
    //     loadChildren: '../thirdModule/app.thirdModule#ThirdModule'
    // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
