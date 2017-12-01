import { Observable } from 'rxjs/Observable';
import { Inject, Injectable } from '@angular/core';
import { FileUploadService } from 'project-two-typings';

@Injectable()
export class UploadFileService {
    constructor(@Inject('FileUploadService') private readonly uploadService: FileUploadService) { }

    public uploadFile(file: File, id: string): Observable<number> {
        return this.uploadService.uploadFile(file, id);
    }
}
