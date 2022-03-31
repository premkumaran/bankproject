import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdddetailsComponent } from './adddetails/adddetails.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { FilterPipe } from './filter.pipe';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UsernamePipe } from './username.pipe';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    AdddetailsComponent,
    AddstaffComponent,
    FilterPipe,
    LoginComponent,
    UsernamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
