import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  Bankstates: Invoice[] = [];
  textsearch = "";
  isuser: boolean = false;

  constructor(public dataservice: DataService, public router: Router) {
    if (dataservice.Users.Usertype === "admin") {
      this.Bankstates = dataservice.Accountdetails;
      this.isuser = true;
    }
    else if (dataservice.Users.Usertype === "user") {
      this.Bankstates= dataservice.Accountdetails.filter((x) => x.Usertype === "user" && x.id===this.dataservice.Users.id);
    }

  }

  ngOnInit(): void {
  }
  Invoice: Invoice = new Invoice;
  Credit = 0;
  Debit = 0;

  bank(c: string) {
    this.Credit = 0;
    for (let index = 0; index < this.Bankstates.length; index++) {
      if (this.Bankstates[index].Type == c) {
        this.Credit = this.Credit + this.Bankstates[index].Amount;
      }

    }
    return this.Credit;
  }
  
  logout() {
    this.dataservice.Logout();
  }
}

