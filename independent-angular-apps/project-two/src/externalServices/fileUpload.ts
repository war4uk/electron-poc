import { Observable } from 'rxjs/Observable';
import { Routes } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { FileUploadService } from 'project-two-typings';
import { fromByteArray } from 'base64-js';

export class FileUpload implements FileUploadService {
    private currentFiles = {};
    private blobSize = 1000;

    uploadFile(file: File, id: string): Observable<number> {
        console.log('uploadFile called', file, id);

        const resultingObservable = new Subject<number>();
        resultingObservable.subscribe(() => this.readNextChunkFromFile(id));
        this.currentFiles[id] = { file, observable: resultingObservable };
        setTimeout(() => this.readNextChunkFromFile(id));
        return resultingObservable;
    }

    readNextChunkFromFile(id) {
        const file = this.currentFiles[id].file;
        const offset = this.currentFiles[id].offset || 0;
        const observable = this.currentFiles[id].observable;

        console.log('reading chunk: ', offset);

        if (offset > file.size) {
            return;
        }

        const reader = new FileReader();
        const endIndex = Math.min(file.size, offset + this.blobSize);
        const blob = file.slice(offset, endIndex);
        reader.readAsArrayBuffer(blob);
        this.currentFiles[id].offset = offset + this.blobSize;

        reader.onload = (event) => {
            console.log(event);
            console.log(`project one loaded ${id} file chunk content result: `, (<FileReader>event.target).result);
            const content = fromByteArray(new Uint8Array((<FileReader>event.target).result));
            console.log('read', endIndex);
            setTimeout(() => {
                console.log('waiting 2 secs before reading next chunk');
                observable.next(endIndex);
            }, 2000);
        };
    }
}
