import { HttpErrorResponse, HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { EMPTY, Observable, catchError, map, of, throwError } from "rxjs";

@Injectable({ providedIn: "root" })
export class Interceptor implements HttpInterceptor {
    
    constructor(private cookies: CookieService) {

    }

    public intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token: string = this.cookies.get("token");

        const request = req.clone({
            setHeaders: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })

        return next.handle(request).pipe(
            catchError((error: HttpEvent<any>, caught$: Observable<HttpEvent<any>>) => {
                return throwError(() => error);
            })
        );
    }
}