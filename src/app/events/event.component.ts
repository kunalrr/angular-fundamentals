import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  
 // styleUrls: ['./../styles.css'],
 styles:[`
  .thumbnail{min-height:210px;}
  .pad-left{margin-left:10px;}
  .well div{color: #bbb;}
  `]
})
export class EventComponent {
  title = 'event';
  @Input() eventInput:any;
  @Output() whenClick = new EventEmitter();


  HandleClickMe()
  {
      console.log("I am clicked!");
  }

  HandleClickMeEmitToParent()
  {
      this.whenClick.emit("Msg from the child Event Component");

  }
}