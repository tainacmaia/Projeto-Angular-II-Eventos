import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';

import { EventsListComponent } from './components/events-list/events-list.component';
import { MinhasReservasComponent } from './components/minhas-reservas/minhas-reservas.component';
import { ReservationComponent } from './components/reservation/reservation.component';


import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserRoutingModule } from './user-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

const material = [
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
];


@NgModule({
  declarations: [UserComponent,
    EventsListComponent,
    MinhasReservasComponent,
    ReservationComponent,
    ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    UserRoutingModule,
    material,
  ]


})
export class UserModule { }
