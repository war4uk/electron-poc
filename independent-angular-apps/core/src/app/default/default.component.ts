import { Component, OnInit, Inject } from '@angular/core';
import {LoggerService} from 'project-one-typings';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(@Inject('LoggerService') private readonly logger: LoggerService) { }

  ngOnInit() {
    this.logger.log('Logger works in core module');
  }

}
