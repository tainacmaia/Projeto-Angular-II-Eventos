import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MinhasReservasComponent } from './components/minhas-reservas/minhas-reservas.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { ReservationComponent } from './components/reservation/reservation.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      // {
      //   path: 'options', component: OptionsAdmComponent,
      // },
      {
        path: 'reservas', component: MinhasReservasComponent,
      },
      // {
      //   path: 'edit/:id', component: CreateEventComponent,
      // },
      {
        path: '', component:  EventsListComponent,
      },
      {
        path: 'reservation/:id', component: ReservationComponent,
      }
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
