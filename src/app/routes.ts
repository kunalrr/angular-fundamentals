import { Routes } from "@angular/router";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventListComponent } from "./events/events-list.component";
import { CreateEventComponent } from "./events/create-event.component";
import { EventListResolver } from "./services/event-list-resolver.service";

export const appRoutes:Routes =[
 
    { path:'events', component:EventListComponent},
    { path:'events/new', component:CreateEventComponent},
  
        // resolve:{events:EventListResolver}, 
//        pathMatch:'full'},

    { path:'events/:id',component:EventDetailsComponent},
    { path: '', redirectTo:'/events',pathMatch:'full'},
    { path: 'user', loadChildren:'./user/user.modules#UserModule'}
]