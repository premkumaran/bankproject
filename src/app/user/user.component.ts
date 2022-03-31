import { Component, OnInit } from '@angular/core';
import { Details } from '../details';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Userdetails: Details[] = [];
  isadmin: boolean = false;
  isuser: boolean = false;
  textsearch = "";
  constructor(public dataservice: DataService) { 
    this.Userdetails = dataservice.Alldetails;
  }

  ngOnInit(): void {
  }

}
