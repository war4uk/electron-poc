import { Component, Inject } from '@angular/core';
import { LoggerService } from 'typings-package';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';

  constructor(@Inject('LoggerService') private readonly logger: LoggerService) { }
}
