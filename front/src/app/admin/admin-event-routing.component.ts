import { LoginAdmComponent } from './../login-adm/login-adm.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { HomeAdmComponent } from './components/home-adm/home-adm.component';
import { ListEventsComponent } from './components/list-events/list-events.component';
import { OptionsAdmComponent } from './components/options-adm/options-adm.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: 'options', component: OptionsAdmComponent,
      },
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
        path: '', component: LoginAdmComponent,
        // path: '', component: HomeAdmComponent,
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
