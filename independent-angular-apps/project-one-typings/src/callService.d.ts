import { Observable } from 'rxjs/Observable';

export interface CallService {
    startCall(phoneNumber: number): void;

    onDialogStarted(): Observable<number>;

    endCall(): void;

    onDialogFinished(): Observable<void>;
}
