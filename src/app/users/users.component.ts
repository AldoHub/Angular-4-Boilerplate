import { Component, OnInit } from '@angular/core';
import {FetchUsersService} from "../fetch-users.service";


//interface to manage user properties
interface Users {
  gender:string,
  email:string,
  cell:string,
  dob:string,
  name: {
    first:string,
    last:string
  },
  login: {
    username:string,

  },
  picture: {
    large:string
  },
  registered:string
}



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private fetchUsersService: FetchUsersService) { }

  //users property is type Array of Users
  users: Users[]



  //get the service and subscribe to it
  getUsersData(){
    //get the returned data from the service getUsers function
    this.fetchUsersService.getUsers().subscribe(users =>{
     
      //init the property users to an empty array
      this.users=[];

      //get the objects inside the response array
      //this is the data brought by the service
      let response=users["results"]; 
          
      
          //check the data is there
          console.log(response);  
      

      //push the results onto the users array
      response.forEach(user => {
        this.users.push(user);  
      });
      
    });
  }

  ngOnInit() {
    this.getUsersData();

  }

}
