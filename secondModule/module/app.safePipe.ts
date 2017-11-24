import { Pipe, PipeTransform } from '../../../node_modules/@angular/core';
import { DomSanitizer } from '../../../node_modules/@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
    constructor(private readonly sanitizer: DomSanitizer) {}

    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
