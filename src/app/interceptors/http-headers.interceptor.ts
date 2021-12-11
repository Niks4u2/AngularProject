import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserLoginService } from "../services/user-login.service";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  
  constructor(private authService: UserLoginService) {}

  token()
  {
    if(this.authService.getToken())
      return this.authService.getToken();
    else
      return "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuaWtoaWxAZ21haWwuY29tIiwiZXhwIjoxNjM5MzcxMTUzLCJpYXQiOjE2MzkxOTgzNTN9.eKE873yHcp-OllIqAmjCXzWDQaTqjI5yivO2lWd5PPw";
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
          Authorization: `Bearer ${this.token()}`
          }
    });
    return next.handle(req);
  }
}