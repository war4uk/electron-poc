import { Injectable } from '@angular/core';
import { BroadcastServiceBase } from '../broadcastModule/broadcastServiceBase';

@Injectable()
export class BroadcastService extends BroadcastServiceBase {
    constructor() {
        super('main-module:channel', 'Main module channel');
    }
}
