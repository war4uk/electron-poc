import { FileUploadService } from 'project-two-typings';
import {Inject, Injectable} from '@angular/core';

@Injectable()
export class FileUploadServiceProxy {
    private readonly internalBroadcastChannel = new (<any>window).BroadcastChannel('files:channelId');

    constructor(
        @Inject('FileUploadService') private readonly fileUploadService: FileUploadService
    ) {}

    public startUploadingFile(file: File, id: number): void {
        this.fileUploadService.uploadFile(file, id.toString()).subscribe(progress => {
            console.log('observable triggered, sending complete event');
            this.internalBroadcastChannel.postMessage({
                progress,
                name: file.name,
                type: 'file:upload:blob:complete'
            });
        });
    }
}
