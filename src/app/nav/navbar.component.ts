import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  
 // styleUrls: ['./../styles.css'],
 styles:[`
   .nav.navbar-nav{font-size:15px;}
   #searchForm {margin-right: 100px;}
   @media(max-width:1200px) {#searchForm{display:none}}
   li > a.active {color: #F97924;}


   .green{color:#003300 !important;}
   .thumbnail{min-height:210px;}
   .pad-left{margin-left:10px;}
   .well div{color: #bbb;}
   `]

})


export class NavBarComponent {

  
  constructor(private authService:AuthService)
  {
   
  }

}