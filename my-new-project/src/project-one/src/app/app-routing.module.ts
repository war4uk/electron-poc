import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';

const routes: Routes = [
    { path: '', redirectTo: 'first', pathMatch: 'full' },
    { path: 'first', component: FirstComponent },
    { path: 'second', component: SecondComponent }
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {
}
