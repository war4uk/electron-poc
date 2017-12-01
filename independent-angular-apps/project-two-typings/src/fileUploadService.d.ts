import { Observable } from 'rxjs/Observable';

export interface FileUploadService {
    uploadFile(file: File, id: string): Observable<number>;

    error(message: string): void;

    warning(message: string): void;
}
