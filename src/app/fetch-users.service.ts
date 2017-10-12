import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FetchUsersService {

  constructor(private HttpClient: HttpClient) { }

  
  getUsers(){
    // return the results
    // else will be an error "property subscribe does not exist on type void"
    // when you call the service
    return this.HttpClient.get("https://randomuser.me/api/?results=15");
   
  }
  


}
