import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-adm',
  templateUrl: './login-adm.component.html',
  styleUrls: ['./login-adm.component.css']
})
export class LoginAdmComponent implements OnInit {

  constructor(private router: Router) {}

  public form!: FormGroup;

  ngOnInit() {
    this.buildForm();
  }

  public buildForm(): void{
    this.form = new FormGroup({
      user: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  public onSubmit(): void {
    this.router.navigate(['/adm/options'])
  }
}
