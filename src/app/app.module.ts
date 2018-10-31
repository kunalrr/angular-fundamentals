import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/events-list.component';
import { EventComponent } from './events/event.component';
import { EventService } from './services/event.component.service';
import { ToastrService } from './services/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { NavBarComponent}  from './nav/navbar.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventListResolver } from './services/event-list-resolver.service';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CollapsableWellComponent } from './events/event-details/collapsable-well.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EventListComponent,
    EventComponent,
    EventDetailsComponent,
    CreateEventComponent,
    SessionListComponent,
    CollapsableWellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, ToastrService,AuthService
    // , EventListResolver
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
