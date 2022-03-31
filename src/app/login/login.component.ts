import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Username = "";
  Password = "";
  constructor(public dataservice:DataService,public router:Router,private notifyService : NotificationService) { }

  ngOnInit(): void {
  }
  login() {
    const data = this.dataservice.Loggedin(this.Username, this.Password);
    this.notifyService.showSuccess("Please Enter Valid UserName and Password !!", "Bankstates.com");
    if (data) {

      if (this.dataservice.Users.Usertype === "admin") {
        this.router.navigate(["/admin"]);
        this.notifyService.showSuccess("Login successfully !!", "Bankstates.com");
        this.notifyService.showSuccess("Welcome to Admin Page !!", "Bankstates.com")
      }
      if (this.dataservice.Users.Usertype === "user") {
        this.router.navigate(["/admin"]);
        this.notifyService.showSuccess("Login successfully !!", "Bankstates.com");
        this.notifyService.showSuccess("Welcome to User Page !!", "Bankstates.com")
      }
    }
  }

  showToasterSuccess(){
    this.notifyService.showSuccess("Data shown successfully !!", "tutsmake.com")
}

  showToasterError() {
    if (this.dataservice.Users.Usertype) {
      this.notifyService.showError("Please Enter Valid UserName", "Bankstates.com")
    
    } //else if () {
    //   this.notifyService.showError("Please Enter Valid Password", "Bankstates.com")
    // }
}

showToasterInfo(){
    this.notifyService.showInfo("This is info", "tutsmake.com")
}

showToasterWarning(){
    this.notifyService.showWarning("This is warning", "tutsmake.com")
}
}
