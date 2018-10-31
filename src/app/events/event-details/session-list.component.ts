import { Component, Input } from '@angular/core';
 
@Component({
    //selector: 'events-details',   //not needed as page is not used as child to other component
    
    selector: 'session-list',
    
    templateUrl: './session-list.component.html',
    
    styles:[
        `.container {padding-left:20px; padding-right:20px;}
         .event-image {height:100px;}
        `] 
  })

  export class SessionListComponent {

    @Input() sessions:any
 
  }  