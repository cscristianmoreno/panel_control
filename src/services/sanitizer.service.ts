import { Injectable } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Injectable({
    providedIn: "root"
})

export class SanitizerService {
    
    constructor(private sanitizer: DomSanitizer) {

    }

    public sanitizerElement(icon: string) {
        const element: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(icon);
        return element;
    }
}