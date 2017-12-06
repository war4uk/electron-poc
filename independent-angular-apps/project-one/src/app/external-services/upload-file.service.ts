import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

const internalBroadcastChannel = new (<any>window).BroadcastChannel('files:channelId');

const state = new State();

export class UploadFileService {
    static forPlugins({ files }): UploadFileService {
        return new UploadFileService(files, state);
    }

    private constructor(private filesPluginManager: any, private state: any) { }

    uploadFile(file): Observable<number> {
        return this.filesPluginManager.uploadFile(file, file.innerId)
            .subscribe(progress => {
                console.log('observable triggered, sending complete event');
                internalBroadcastChannel.postMessage(progress);
            });
    }
}
