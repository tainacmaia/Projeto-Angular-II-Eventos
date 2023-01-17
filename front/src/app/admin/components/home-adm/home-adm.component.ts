import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.component.html',
  styleUrls: ['./home-adm.component.css']
})
export class HomeAdmComponent {

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
