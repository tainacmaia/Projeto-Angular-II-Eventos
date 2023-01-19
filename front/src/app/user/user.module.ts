import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';

import { EventsListComponent } from './components/events-list/events-list.component';
import { MinhasReservasComponent } from '../admin/components/minhas-reservas/minhas-reservas.component';
import { ReservationComponent } from './components/reservation/reservation.component';


import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserRoutingModule } from './user-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContatoComponent } from './components/contato/contato.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { ModalConfirmarReservaComponent } from './modals/modal-confirmar-reserva/modal-confirmar-reserva.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalReservaConfirmadaComponent } from './modals/modal-reserva-confirmada/modal-reserva-confirmada.component';

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
    ContatoComponent,
    SobreNosComponent,
    ModalConfirmarReservaComponent,
    ModalReservaConfirmadaComponent,
    ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    UserRoutingModule,
    material,
    MatDialogModule
  ]


})
export class UserModule { }
