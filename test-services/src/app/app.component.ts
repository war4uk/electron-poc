import { Component } from '@angular/core';

import { TestServiceService } from './module-1/test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private service: TestServiceService) {
    this.title = service.getTitle();
  }
}

