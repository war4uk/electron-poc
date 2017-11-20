import { Injectable } from '../../../node_modules/@angular/core';
import { BroadcastServiceBase } from '../../../node_modules/broadcast-module/broadcastServiceBase';

@Injectable()
export class BroadcastService extends BroadcastServiceBase {
    constructor() {
        super('main-module:channel', 'Main module channel');
    }
}
