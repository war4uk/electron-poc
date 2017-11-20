import {ActivatedRouteSnapshot, RouterStateSnapshot} from '../../../node_modules/@angular/router';
import { NgModule } from '../../../node_modules/@angular/core';


import { SecondComponent } from './app.secondComponent';
import { secondRouting } from './app.secondRouting';
import { SafePipe } from './app.safePipe';


@NgModule({
  declarations: [
    SecondComponent, SafePipe
  ],
  imports: [
    secondRouting
  ],
  exports: [
    SecondComponent
  ],
  providers: [{
    provide: 'externalUrlRedirectResolver',
    useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      window.location.href = (<any>route.data).externalUrl;
    }
  }]
})
export class SecondModule { }
