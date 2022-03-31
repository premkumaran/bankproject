import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdddetailsComponent } from './adddetails/adddetails.component';
import { AddstaffComponent } from './addstaff/addstaff.component';

const routes: Routes = [
  { path: "login", component:LoginComponent },
  { path: "admin", component: AdminComponent},
  { path: "user", component:UserComponent},
  { path: "adddetails", component: AdddetailsComponent},
  { path: "addusers", component: AddstaffComponent },
  { path: "", redirectTo:"/login",pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
