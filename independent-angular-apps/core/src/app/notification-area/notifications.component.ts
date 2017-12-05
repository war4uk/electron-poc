import { Component, OnInit } from '@angular/core';
import {CallProxyService} from '../services/callProxy.service';

@Component({
    selector: 'app-notifications-component',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.css']
  })
export class NotificationsComponent implements OnInit {
    public callNumber?: number;

    constructor(private readonly callService: CallProxyService) { }

    public ngOnInit(): void {
        this.callService.onDialogStarted().subscribe((callNum: number) => {
            this.callNumber = callNum;
        });
        this.callService.onDialogFinished().subscribe(() => {
            this.callNumber = null;
        });
    }
}
