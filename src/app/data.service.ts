import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Details } from './details';
import { Invoice } from './invoice';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  Signin: boolean = false;
  Users: any;
  Loggedin(Username: string | any, Password: string | any) {
   
    this.Users = this.Alldetails.find((x) => x.Username.toLowerCase() === Username.toLowerCase() && x.Password === Password)
    this.Signin = this.Users ? true : false;
    return this.Signin;

    
  }
  //--------------- data in---------------------------------------
  Accountdetails: Invoice[] = [];
  // ---------------------------------------------------
  
  Alldetails: Details[] = [
    { id: "1", Username: "Admin", Password: "admin", Usertype: "admin" },
    { id: "2", Username: "user", Password: "user", Usertype: "user" },
  ];

  constructor(public router: Router,private notifyService : NotificationService) { }


  Adddetails(detail: Invoice) {
    detail.Usertype = this.Users.Usertype;
    detail.id = this.Users.id;
    this.Accountdetails.push(detail);
  }

  Adduser(addusers: Details) {
    this.Alldetails.push(addusers);
  }

  Logout() {
    this.Signin = false;
    this.router.navigate(["/login"]);
  }
}
