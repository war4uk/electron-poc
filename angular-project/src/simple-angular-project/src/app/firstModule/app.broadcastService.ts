import { Injectable } from '../../../node_modules/@angular/core';
import { BroadcastServiceBase } from '../../../node_modules/broadcast-module/broadcastServiceBase';

@Injectable()
export class BroadcastService extends BroadcastServiceBase {
    constructor() {
        super('first-module:channel', 'First module channel');
    }

    protected onInternalMessage(message: any): void {
        super.onInternalMessage(message);
        console.log('First module redefined on internal message');
    }
}
