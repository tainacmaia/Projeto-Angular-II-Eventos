import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageKeysEnum } from 'src/app/core/constants/local-storage-keys.enum';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(private router: Router) {}

  public admLogado(): void {
    const token = localStorage.getItem(LocalStorageKeysEnum.ADM_TOKEN);
    if (!token) {
      this.router.navigate(['/adm/login']);
    }
    else {
      this.router.navigate(['/adm/options']);
    }
  }
}
