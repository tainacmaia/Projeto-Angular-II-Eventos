import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdmComponent } from './login-adm/login-adm.component';
import { HomeAdmComponent } from './admin/components/home-adm/home-adm.component';

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
