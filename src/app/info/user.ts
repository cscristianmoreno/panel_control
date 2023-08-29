import { Injectable } from "@angular/core";
import { userStruct } from "../interfaces/Interface";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class UserInfo {
    user: BehaviorSubject<userStruct | null> = new BehaviorSubject<userStruct | null>(null);
    readonly user$ = this.user.asObservable();
} 