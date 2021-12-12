import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserLoginService } from "../services/user-login.service";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  
  constructor(private authService: UserLoginService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if(this.authService.loggedIn())
    {
      req = req.clone({
        setHeaders: {
            Authorization: `Bearer ${this.authService.getToken()}`
            }
      });
    }
    return next.handle(req);
  }
}