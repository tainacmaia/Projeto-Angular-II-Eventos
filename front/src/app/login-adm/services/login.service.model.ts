import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public login(payload: any): Observable<any> {
    return this.http.post<any>('http://localhost:5000/login', payload);
  }

  public logout(): void {
    localStorage.removeItem('ADM_TOKEN');
    localStorage.removeItem('USER');
    this.router.navigate(['/adm/login']);
  }

}
