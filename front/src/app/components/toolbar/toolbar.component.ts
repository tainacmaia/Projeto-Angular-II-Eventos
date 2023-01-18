import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(private router: Router) {}

  public admLogado(): void {
    const token = localStorage.getItem('ADM_TOKEN');
    if (token === undefined) {
      this.router.navigate(['/adm/login']);
    }
    else {
      this.router.navigate(['/adm/options']);
    }
  }
}
