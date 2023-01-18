import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionsAdmComponent } from './components/options-adm/options-adm.component';

import {MatDialogModule} from '@angular/material/dialog';


import { AdminEventRoutingModule } from './admin-event-routing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ModalExcluirEventoComponent } from './modals/modal-excluir-evento/modal-excluir-evento.component';
import { AdminEventsComponent } from './admin-events.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { HomeAdmComponent } from './components/home-adm/home-adm.component';
import { ListEventsComponent } from './components/list-events/list-events.component';


const material = [
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
];


@NgModule({
  declarations: [AdminEventsComponent,
    HomeAdmComponent,
    OptionsAdmComponent,
    CreateEventComponent,
    ListEventsComponent,
    ModalExcluirEventoComponent,

  ],
  imports: [
    CommonModule,
    AdminEventRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    material,
  ]

})
export class AdminEventsModule { }
