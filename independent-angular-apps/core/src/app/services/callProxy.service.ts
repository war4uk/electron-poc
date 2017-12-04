import { Observable } from 'rxjs/Observable';
import { Inject, Injectable } from '@angular/core';
import { CallService, LoggerService } from 'project-one-typings';

@Injectable()
export class CallProxyService {
    constructor(
        @Inject('LoggerService') private readonly logger: LoggerService,
        @Inject('CallService') private readonly callService: CallService) { }

    public onDialogStarted(): Observable<number> {
        this.logger.log('Call start subscription via proxy service');
        return this.callService.onDialogStarted();
    }

    public onDialogFinished(): Observable<void> {
        return this.callService.onDialogFinished();
    }
}
