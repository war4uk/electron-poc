import { FileUploadService } from 'project-two-typings';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FileUploadServiceMock implements FileUploadService {
    uploadFile(file: File, id: string): Observable<number> {
        console.log('It\'s supposed I uploaded something');

        return new Subject<number>();
    }
}
