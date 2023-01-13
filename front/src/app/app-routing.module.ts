import { HomeAdmComponent } from './admin/components/home-adm/home-adm.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionsAdmComponent } from './admin/components/options-adm/options-adm.component';

const routes: Routes = [


  {
    path: 'adm', children: [
      {
        path: 'options', component: OptionsAdmComponent,
      },
      {
        path: '', component: HomeAdmComponent
      }
    ]
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
