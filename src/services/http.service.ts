import { HttpClient, HttpErrorResponse, HttpStatusCode } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable, lastValueFrom } from "rxjs";
import { AlertComponent } from "src/app/components/alert/alert.component";
import { tokenStruct, userStruct } from "src/app/interfaces/Interface";

import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root"
})

export class HttpService {

    constructor(private http: HttpClient, private alert: AlertComponent, private cookies: CookieService, private router: Router) {
    }
    
    public async userRegister(form: FormGroup) {
        if (form.invalid) {
            this.alert.subject.next(0);
            return;
        }

        const response: Observable<Object> = this.http.post<Object>("http://localhost:8080/register", JSON.stringify(form.value));

        try {
            const result = await lastValueFrom(response);
            this.alert.subject.next(HttpStatusCode.Created);
        }
        catch (error: any) {
            this.alert.subject.next(error.status);
        }
    }

    public async userLogin(form: FormGroup) {
        if (form.invalid) {
            this.alert.subject.next(0);
            return;
        }

        const response: Observable<Object> = this.http.post("http://localhost:8080/login", JSON.stringify(form.value)); 
        
        try {
            const result: tokenStruct = await lastValueFrom(response) as tokenStruct;
            
            console.log(result.access_token);
            this.cookies.set("token", result.access_token, new Date(parseInt(result.expires_in)));
            this.alert.subject.next(HttpStatusCode.Continue);

            setTimeout(() => {
                this.router.navigate(["/"]);
            }, 1000);
        }
        catch (error: any) {
            this.alert.subject.next(error.status);
        }
    }

    public async getIcon(icon: string) {
        const http: Observable<string> = this.http.get(`./assets/${icon}`, {
            responseType: "text"
        });
        
        const result = await lastValueFrom(http);
        return result;
    }

    public userAuth() {
        const response: Observable<userStruct> = this.http.post<userStruct>("http://localhost:8080/auth", {});
        return response;
    }

    public getAllUsers() {
        const response = this.http.get<userStruct[]>("http://localhost:8080/users");
        return response;
    }

    public async deleteUser(id: string) {
        const response: Observable<boolean> = this.http.delete<boolean>("http://localhost:8080/users", {
            params: {
                "userId": id
            }
        });

        try {
            const result = await lastValueFrom(response);
            this.alert.subject.next(HttpStatusCode.Ok);
        }
        catch (error: any) {
            this.alert.subject.next(error.status);
        }
        
        return response;
    }
}