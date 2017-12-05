import { Component, Inject } from '@angular/core';
import { LoggerService, LOGGER_SERVICE } from 'project-one-typings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';

  constructor(@Inject(LOGGER_SERVICE) private readonly logger: LoggerService) { }
}
