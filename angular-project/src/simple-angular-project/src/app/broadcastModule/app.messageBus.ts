import { BroadcastServiceBase } from './broadcastServiceBase';
import { Injectable } from '@angular/core';

const broadcastChannelId = 'unite:channelId';
const bc = new (<any>window).BroadcastChannel(broadcastChannelId);
bc.onmessage = (message) => { console.log('Plugin manager received data from global channel: ', message.data); };

@Injectable()
export class MessageBus {
    public registerChannel(channel: BroadcastServiceBase): void {
        channel.run(broadcastChannelId);
    }
}
