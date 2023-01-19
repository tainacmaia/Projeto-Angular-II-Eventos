import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MinhasReservasComponent } from '../admin/components/minhas-reservas/minhas-reservas.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { ContatoComponent } from './components/contato/contato.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '', component:  EventsListComponent,
      },
      {
        path: 'reservation/:id', component: ReservationComponent,
      },
      {
        path: 'sobre-nos', component: SobreNosComponent,
      },
      {
        path: 'contato', component: ContatoComponent,
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
