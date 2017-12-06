import { Component, OnInit } from '@angular/core';

import { TestServiceService as alias1 } from '../module-1/test-service.service';
import { TestServiceService as alias2 } from '../module-2/test-service.service';

@Component({
  selector: 'app-test-component-aliases',
  templateUrl: './test-component-aliases.component.html',
  styleUrls: ['./test-component-aliases.component.css']
})
export class TestComponentAliasesComponent implements OnInit {

  title1 = 'app';
  title2 = 'app';
  constructor(private service1: alias1, private service2: alias2) { }

  ngOnInit() {
    this.title1 = this.service1.getTitle();
    this.title2 = this.service2.getTitle();
  }

}
