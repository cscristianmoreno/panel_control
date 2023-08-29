import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { SanitizerService } from "./sanitizer.service";

@Injectable({
    providedIn: "root"
})

export class IconService {

    constructor(private http: HttpService, private sanitizer: SanitizerService) {

    }

    public async getIcon(svg: string) {
        const icon: string = await this.http.getIcon(svg);
        return this.sanitizer.sanitizerElement(icon);
    }
}