import { Component } from '@angular/core'; 
import { Route, Router } from '@angular/router';
import { EventService } from '../services/event.component.service';

@Component({
  
    // template:`<h1>New Event</h1>`,
   templateUrl: './create-event.component.html',
   styles: [`
   em{float:right; color:#E05C65; padding-left: 10px;}
   .error input{background-color:#E3C3C5;}
   .error ::-webkit-input-placeholder{color:#999;}
   .error ::-moz-placeholder{color:#999;}
   .error :-moz-placeholder{color:#999;}
   .error :ms-input-placeholder{color:#999;}
   `]
})

export class CreateEventComponent {

  isDirty: boolean = true
  newEvent:any

  constructor(private router: Router, private eventService:EventService )
  {
  }

  ngOnInit()
  {
    this.newEvent = {id: 1,name: 'Angular Connect',date: '9/26/2036',time: '10:00 am',price: 599.99,imageUrl: '/assets/images/angularconnect-shield.png',
      location: {        address: '1057 DT',        city: 'London',        country: 'England'      },
      sessions: [
        {id: 1,name: "Using Angular 4 Pipes",presenter: "Peter Bacon Darwin",duration: 1,
          level: "Intermediate",abstract: `Learn all about the new pipes in Angular 4, both how to write them, and how to get the new AI CLI to write them for you. Given by the famous PBD, president of Angular University (formerly Oxford University)`,
          voters: ['bradgreen', 'igorminar', 'martinfowler']
        }
      ]
    }
  }

  saveEvent(formValues)
  {
    console.log(formValues)
    this.eventService.saveEvent(formValues)
    this.isDirty = false
    this.router.navigate(['/events'])
  }

  cancel()
  {
    this.router.navigate(['/events'])
  }
}