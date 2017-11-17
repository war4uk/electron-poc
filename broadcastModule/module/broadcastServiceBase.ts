export abstract class BroadcastServiceBase {
    private globalChannel;

    constructor(protected readonly internalChannelId: string, protected readonly prettyName: string) {
        const internalChannel = new (<any>window).BroadcastChannel(internalChannelId);
        internalChannel.onmessage = (message) => { this.onInternalMessage(message); };
    }

    public run(globalChannelId: string): void {
        const ch = new (<any>window).BroadcastChannel(globalChannelId);
        ch.onmessage = (message) => {
            this.onGlobalMessage(message);
        };

        this.globalChannel = ch;
    }

    public postMessage(message: string): void {
        const ch = new (<any>window).BroadcastChannel(this.internalChannelId);
        ch.postMessage(message);
    }

    protected onGlobalMessage(message: any): void {
        console.log(this.prettyName + ' module got event from global channel:', message.data);
    }

    protected onInternalMessage(message: any): void {
        if (this.globalChannel) {
            this.globalChannel.postMessage(message.data);
        }
    }
}
