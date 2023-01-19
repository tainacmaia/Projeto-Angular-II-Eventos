import { LocalStorageKeysEnum } from './../constants/local-storage-keys.enum';
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate(): boolean {

    const token = localStorage.getItem(LocalStorageKeysEnum.ADM_TOKEN)

    if(token) {
      return true;
    } else {
      this.router.navigate(['/adm/login'])
      return false
    }

  }

}
