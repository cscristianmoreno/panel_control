import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { userStruct } from "src/app/interfaces/Interface";
import { HttpService } from "./http.service";

@Injectable({
    providedIn: "root"
})

export class UserService {
    users: Subject<userStruct[]> = new Subject<userStruct[]>();
    users$: Observable<userStruct[]> = this.users.asObservable();

    constructor(private http: HttpService) {

    }

    public getAllUsers() {
        this.http.getAllUsers().subscribe((res) => {
            this.users.next(res);
        })
    }
}