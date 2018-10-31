import { Component, Input } from '@angular/core';
import { EventService } from './../../services/event.component.service';
import { ActivatedRoute } from '@angular/router';

@Component({

    selector:'collapsable-well',

    template: `
    <div (click)="toggleContent()" class="well pointable">
    
      <h4>
        <ng-content select="[well-title]"></ng-content>
      </h4>
      
      <ng-content *ngIf="visible"  select="[well-body]"></ng-content>
    
    </div>
    `,
    
    styles:[
        `.container {padding-left:20px; padding-right:20px;}
         .event-image {height:100px;}
        `] 
  })

  export class CollapsableWellComponent {

    event:any
    visible:boolean
    @Input() title:string

    toggleContent()
    {this.visible=!this.visible}

  }