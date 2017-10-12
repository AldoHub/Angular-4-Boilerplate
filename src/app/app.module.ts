import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//using HttpClientModule instead of http
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

//import the service
import {FetchUsersService} from "./fetch-users.service";
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';

//import the RouterModule
import { RouterModule, Routes } from '@angular/router';

//import our routing file
import {RoutingModule} from "../routing.module";
//import the routes const
import {routingComponents} from "../routing.module";


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MainComponent,
    routingComponents,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [FetchUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
