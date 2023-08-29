import { AfterViewInit, Injectable, OnChanges } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject, Subject } from "rxjs";
import { httpMessageWithKey } from "src/app/interfaces/Interface";
import { HTTP_CODES } from "src/services/http.codes.service";

@Injectable({
    providedIn: "root"
})

export class AlertComponent {
    subject: Subject<number> = new Subject<number>();
    private readonly alert$ = this.subject.asObservable();

    constructor(private snackbar: MatSnackBar) {
        this.alertInitialize();
    }

    public alertInitialize() {
        this.alert$.subscribe((code) => {
            console.log(code);
            this.snackbar.open(HTTP_CODES[this.getIndex(code)].message, "", {
                horizontalPosition: "end",
                verticalPosition: "top",
                duration: 2000,
                panelClass: HTTP_CODES[this.getIndex(code)].class
            });
        })
    }

    private getIndex(code: number) {
        const find = HTTP_CODES.findIndex((value) => value.code === code)
        return find;
    }
}

