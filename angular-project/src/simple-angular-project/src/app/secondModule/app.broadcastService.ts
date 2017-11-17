import { Injectable } from '@angular/core';
import { BroadcastServiceBase } from '../broadcastModule/broadcastServiceBase';

@Injectable()
export class BroadcastService extends BroadcastServiceBase {
    constructor() {
        super('second-module:channel', 'Second module channel');
    }
}
