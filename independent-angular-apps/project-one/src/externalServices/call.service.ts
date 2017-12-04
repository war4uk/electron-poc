import { CallService } from 'project-one-typings';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export class CallServiceImpl implements CallService {
    private readonly dialogStartBroadcaster: Subject<number>;
    private readonly dialogStopBroadcaster: Subject<void>;

    constructor() {
        this.dialogStartBroadcaster = new Subject<number>();
        this.dialogStopBroadcaster = new Subject<void>();
    }

    startCall(phoneNumber: number): void {
        this.dialogStartBroadcaster.next(phoneNumber);
    }
    onDialogStarted(): Observable<number> {
        return this.dialogStartBroadcaster;
    }
    endCall(): void {
        this.dialogStopBroadcaster.next();
    }
    onDialogFinished(): Observable<void> {
        return this.dialogStopBroadcaster;
    }
}
