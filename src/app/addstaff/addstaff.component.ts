import { Component, OnInit } from '@angular/core';
import { Details } from '../details';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent implements OnInit {
  addusers: Details = new Details;
  isuser: boolean = false;
  isadmin: boolean = false;
  constructor(public dataservice: DataService, public router: Router) {
    this.addusers.id = Math.random();
  }

  ngOnInit(): void {
    this.addusers.Usertype = 'user';
  }
  Add() {
    if (this.addusers.Username !=null && this.addusers.Password !=null && this.addusers.Usertype !=null) {
      this.dataservice.Adduser(this.addusers);
      this.addusers = new Details;
      this.router.navigate(["/user"]);
    
    } else {
      alert("Enter the Alldetails");
    }
  }
}
