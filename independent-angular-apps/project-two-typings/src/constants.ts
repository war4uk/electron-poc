import { InjectionToken } from "@angular/core";
import { FileUploadService } from "./fileUploadService";

export const FILE_UPLOAD_SERVICE: InjectionToken<FileUploadService>
    = new InjectionToken<FileUploadService>("project-two.FileUploadService");
