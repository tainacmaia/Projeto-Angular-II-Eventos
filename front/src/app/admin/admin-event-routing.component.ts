import { AdminEventsComponent } from './admin-events.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { HomeAdmComponent } from './components/home-adm/home-adm.component';
import { ListEventsComponent } from './components/list-events/list-events.component';
import { OptionsAdmComponent } from './components/options-adm/options-adm.component';
import { MinhasReservasComponent } from './components/minhas-reservas/minhas-reservas.component';

const routes: Routes = [
  {
    path: '',
    component: AdminEventsComponent,
    children:[
      {
        path: 'create', component: CreateEventComponent,
      },
      {
        path: 'edit/:id', component: CreateEventComponent,
      },
      {
        path: 'list/events', component:  ListEventsComponent,
      },
      {
        path: 'options', component: OptionsAdmComponent,
      },
      {
        path: 'reservas', component: MinhasReservasComponent,
      },
      {
        // path: 'login', component: LoginAdmComponent,
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
