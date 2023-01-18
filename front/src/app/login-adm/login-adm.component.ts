import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service.model';

@Component({
  selector: 'app-login-adm',
  templateUrl: './login-adm.component.html',
  styleUrls: ['./login-adm.component.css']
})
export class LoginAdmComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) {}

  public formLogin!: FormGroup;

  ngOnInit() {
    this.buildForm();
  }

  public buildForm(): void{
    this.formLogin = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  public onSubmit(): void {
    const payload = this.formLogin.getRawValue();
    this.loginService.login(payload)
      .subscribe({
        next: (res) => {
          console.log(res);
          localStorage.setItem('ADM_TOKEN', res.token);
          localStorage.setItem('USER', JSON.stringify(res.user));
          this.router.navigate(['/adm/options'])
        },
        error: (err) => {
          console.log(err)
        }
      });
  }
}
