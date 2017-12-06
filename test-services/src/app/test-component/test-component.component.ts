import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../module-2/test-service.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  title = 'app';
  constructor(private service: TestServiceService) { }

  ngOnInit() {
    this.title = this.service.getTitle();
  }

}
