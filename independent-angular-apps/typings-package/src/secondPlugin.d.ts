import { Observable } from "rxjs/Observable";
import { AppPlugin } from "./appPlugin";

export interface SecondPlugin extends AppPlugin {
    uploadFile(file: File, id: string): Observable<number>;
}
