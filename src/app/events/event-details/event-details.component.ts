import { Component } from '@angular/core';
import { EventService } from './../../services/event.component.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    //selector: 'events-details',   //not needed as page is not used as child to other component

    templateUrl: './events-details.component.html',
    
    styles:[
        `.container {padding-left:20px; padding-right:20px;}
         .event-image {height:100px;}
        `] 
  })

  export class EventDetailsComponent {

    event:any

    constructor(private eventService:EventService, private route:ActivatedRoute)
    {

    }


    ngOnInit(){
        this.event =  this.eventService.getEvent( +this.route.snapshot.params['id']);
    }
  }  