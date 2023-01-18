import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login-adm/services/login.service.model';

@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.component.html',
  styleUrls: ['./home-adm.component.css']
})
export class HomeAdmComponent {

  constructor(private router: Router, private loginService: LoginService) { }

  public form!: FormGroup;

  ngOnInit() {
    this.buildForm();
  }

  public buildForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  public onSubmit(): void {
    const payload = this.form.getRawValue();
    this.loginService.login(payload)
      .subscribe({
        next: (res) => {
          console.log("TESTE"+res);
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

