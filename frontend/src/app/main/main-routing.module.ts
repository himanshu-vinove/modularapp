import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'userdashboard' , loadChildren: () =>
  import('./user-dashboard/user-dashboard.module').then((m) => m.UserDashboardModule ),},
  {path: 'admindashboard' , loadChildren: () =>
  import('./admin-dashboard/admin-dashboard.module').then((m) => m.AdminDashboardModule ),},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
