import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
  providers: [DataService]
})
export class UserDataComponent implements OnInit {
  userList: User[]=[];
 
  constructor(private dataService: DataService) { }

  getUsers(){
    this.dataService.getUsers()
      .subscribe( items => {
        this.userList = items;
        console.log('data from dataservice: ' + this.userList[0].notifications[0])
      })
  };

  ngOnInit() {
    this.getUsers();
  }

}
