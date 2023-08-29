import { AfterViewInit, Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { HttpService } from "src/services/http.service";
import { UserInfo } from "../info/user";
import { userStruct } from "../interfaces/Interface";

export const AuthGuard = () => {
    const routes = inject(Router);
    const http = inject(HttpService);
    const user = inject(UserInfo);

    http.userAuth().subscribe({
        next: (value: userStruct) => {
            user.user.next(value);  
            return true;
        },
        error: (error) => {
            routes.navigate(["/login"]);
        }
    });
}