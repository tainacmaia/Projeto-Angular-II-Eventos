import { EventsListComponent } from './user/components/events-list/events-list.component';
import { ListEventsComponent } from './admin/components/list-events/list-events.component';
import { HomeAdmComponent } from './admin/components/home-adm/home-adm.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionsAdmComponent } from './admin/components/options-adm/options-adm.component';
import { CreateEventComponent } from './admin/components/create-event/create-event.component';

const routes: Routes = [


  {
    path: 'adm', children: [
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
        path: '', component: HomeAdmComponent,
      }
    ]
  },
  {
    path: 'user', children: [
      // {
      //   path: 'options', component: OptionsAdmComponent,
      // },
      // {
      //   path: 'reservation', component: CreateEventComponent,
      // },
      // {
      //   path: 'edit/:id', component: CreateEventComponent,
      // },
      {
        path: 'list/events', component:  EventsListComponent,
      },
      // {
      //   path: '', component: HomeAdmComponent,
      // }
    ]
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
