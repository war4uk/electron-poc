import { Injectable } from '../../../node_modules/@angular/core';
import { BroadcastServiceBase } from '../../../node_modules/broadcast-module/broadcastServiceBase';

@Injectable()
export class BroadcastService extends BroadcastServiceBase {
    constructor() {
        super('second-module:channel', 'Second module channel');
    }
}
