import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Invoice } from '../invoice';

@Component({
  selector: 'app-adddetails',
  templateUrl: './adddetails.component.html',
  styleUrls: ['./adddetails.component.css']
})
export class AdddetailsComponent implements OnInit {
  detail: Invoice = new Invoice;
  constructor(public dataservice:DataService,public router:Router) { }

  ngOnInit(): void {
  }
  Add() {
    if (this.detail.Date !=null && this.detail.Particular !=null && this.detail.Amount !=null && this.detail.Type !=null) {
      this.dataservice.Adddetails(this.detail);
      this.detail = new Invoice;
      this.router.navigate(["/admin"]);
    
    } else {
      alert("Enter the Alldetails");
    }
  }
}
