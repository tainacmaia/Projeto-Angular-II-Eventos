import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdmComponent } from './login-adm.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdminEventRoutingModule } from '../admin/admin-event-routing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

const material = [
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
];

@NgModule({
  declarations: [LoginAdmComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    material,
  ],
})
export class LoginAdmModule { }
