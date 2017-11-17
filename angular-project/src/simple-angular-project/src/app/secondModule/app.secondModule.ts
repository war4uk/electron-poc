import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { NgModule } from '@angular/core';


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
