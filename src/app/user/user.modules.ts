import {ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core'; 
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { userRoutes } from './user.routes';
import { RouterModule } from '@angular/router';

//  Key diff with App Module is that
//   App Module imports - BrowserModule
//   on Secondary modules - CommonModule is imported

@NgModule(
    {
        
        declarations:[
            ProfileComponent,
            LoginComponent
        ],
        imports:[
            CommonModule,   
            RouterModule.forChild(userRoutes),
            ReactiveFormsModule
        ],
        providers:[]
    }
)

export class UserModule { }
  