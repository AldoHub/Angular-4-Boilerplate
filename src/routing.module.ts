//Routing file
import {NgModule} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';


//import the components
import {MainComponent} from "./app/main/main.component";
import {UsersComponent} from "./app/users/users.component";
import {NotFoundComponent} from "./app/not-found/not-found.component";

//create the routes
const routes: Routes = [
    //paths
    {path:"", component: MainComponent},
    {path:"users", component: UsersComponent},
    {path: "**" ,component: NotFoundComponent}
]

@NgModule({
    //add the routes to the module
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]


})
export class RoutingModule{}
//add the components that will have a route here
export const routingComponents =[
MainComponent, UsersComponent, NotFoundComponent

]


