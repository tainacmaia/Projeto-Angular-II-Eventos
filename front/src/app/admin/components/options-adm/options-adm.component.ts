import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options-adm',
  templateUrl: './options-adm.component.html',
  styleUrls: ['./options-adm.component.css']
})
export class OptionsAdmComponent {


constructor(private router: Router) {
}

  public logout(): void {
    localStorage.removeItem('ADM_TOKEN');
    localStorage.removeItem('USER');
    this.router.navigate(['/adm/login']);
  }
}
