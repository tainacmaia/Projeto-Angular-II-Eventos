import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { LocalStorageKeysEnum } from "src/app/core/constants/local-storage-keys.enum";

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
    localStorage.removeItem(LocalStorageKeysEnum.ADM_TOKEN);
    localStorage.removeItem(LocalStorageKeysEnum.USER);
    this.router.navigate(['/adm/login']);
  }

}
