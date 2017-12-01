import {Item} from './model/Item';
import { Component, OnInit, Inject } from '@angular/core';
import {ItemValue} from './model/ItemValue';
import {LoggerService} from 'typings-package';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public Items: ReadonlyArray<Item>;
  public ItemValues: ReadonlyArray<ItemValue>;

  constructor(@Inject('LoggerService') private readonly logger: LoggerService) { }

  ngOnInit() {
    this.logger.log('Logger works in project two!!!');
    this.Items = [
      {
        Name: 'Item one',
        Id: 1,
        ValueId: 1
      },
      {
        Name: 'Item two',
        Id: 2,
        ValueId: 2
      },
      {
        Name: 'Item three',
        Id: 3,
        ValueId: 3
      }
    ];

    this.ItemValues = [
      {
        Name: 'Value one',
        Id: 1
      },
      {
        Name: 'Value two',
        Id: 2
      },
      {
        Name: 'Value three',
        Id: 3
      }
    ];
  }
}
