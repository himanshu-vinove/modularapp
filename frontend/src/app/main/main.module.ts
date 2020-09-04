import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import{NavbarModule} from '../main/navbar/navbar.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';

@NgModule({
  declarations: [MainComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NavbarModule,
    AngularMaterialModule,
    RouterModule,
    ReactiveFormsModule,
    // UserDashboardModule,
    // AdminDashboardModule
  ],
  exports:[MainComponent]
})
export class MainModule { }
