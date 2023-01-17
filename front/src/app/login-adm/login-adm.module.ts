import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdmComponent } from './login-adm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

const material = [
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    material
  ],
  declarations: [LoginAdmComponent]
})
export class LoginAdmModule { }
