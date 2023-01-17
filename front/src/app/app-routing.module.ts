import { MinhasReservasComponent } from './user/components/minhas-reservas/minhas-reservas.component';
import { EventsListComponent } from './user/components/events-list/events-list.component';
import { ListEventsComponent } from './admin/components/list-events/list-events.component';
import { HomeAdmComponent } from './admin/components/home-adm/home-adm.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionsAdmComponent } from './admin/components/options-adm/options-adm.component';
import { CreateEventComponent } from './admin/components/create-event/create-event.component';
import { ReservationComponent } from './user/components/reservation/reservation.component';

const routes: Routes = [
  {
    path: 'adm',
    loadChildren: () => import('./admin/admin-events.module').then(m => m.AdminEventsModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
