import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class ActionProvider {
    loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    readonly loading$ = this.loading.asObservable();
}