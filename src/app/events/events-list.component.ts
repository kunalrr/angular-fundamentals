import { Component, OnInit } from '@angular/core';
import { EventService } from './../services/event.component.service';
import { ToastrService } from './../services/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  //selector: 'events-list',  //not needed as page is not used as child to other component
  templateUrl: './events-list.component.html',
  
  //styleUrls: ['./app.component.css']'
  styles: [`
  .legend span { padding-right:30px; }
  .in-person { color: green; }
  .online { color: red; }
  .tbd { color: #aaa; }
  .thumbnail { margin-top:10px; padding-top:5px; }
  .label { font-size:14px; margin-bottom:10px; display:inline-block; }
`]
})
export class EventListComponent implements OnInit{
  title = 'events-list'; 
  eventsData:any[];

  HandleInParent(data:any)
  {
      console.log("InSide Parent Component: ",data);
      this.toastrService.successMessage(data);

  }

  constructor(private eventService:EventService, private toastrService:ToastrService ) { 
  }

  ngOnInit() { 
     //this.eventsData = this.route.snapshot.data['events'];
     this.eventsData=this.eventService.getEventsA();
  }

}
