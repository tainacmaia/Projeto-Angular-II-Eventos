import { AdminEventsComponent } from './admin-events.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { HomeAdmComponent } from './components/home-adm/home-adm.component';
import { ListEventsComponent } from './components/list-events/list-events.component';
import { OptionsAdmComponent } from './components/options-adm/options-adm.component';
import { MinhasReservasComponent } from './components/minhas-reservas/minhas-reservas.component';
import { IsAuthenticatedGuard } from '../core/guards/is-authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminEventsComponent,
    children:[
      {
        path: 'create', component: CreateEventComponent, canActivate: [IsAuthenticatedGuard],
      },
      {
        path: 'edit/:id', component: CreateEventComponent, canActivate: [IsAuthenticatedGuard],
      },
      {
        path: 'list/events', component:  ListEventsComponent, canActivate: [IsAuthenticatedGuard],
      },
      {
        path: 'options', component: OptionsAdmComponent, canActivate: [IsAuthenticatedGuard],
      },
      {
        path: 'reservas', component: MinhasReservasComponent, canActivate: [IsAuthenticatedGuard],
      },
      {
        path: 'login', component: HomeAdmComponent,
      }
    ]
  },
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
export class AdminEventRoutingModule { }
