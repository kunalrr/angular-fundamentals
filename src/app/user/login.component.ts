import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { FormControl, FormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup
    
    ngOnInit() {
        let userName = new FormControl(Validators.required)
        let password = new FormControl(Validators.required)
        this.loginForm = new FormGroup(
            { userName: userName, password: password }
          )
      
    }

    constructor(private authService:AuthService, private router:Router)
    {
    }

    login(formValues)
    {
        if(this.loginForm.controls.userName.valid){
            this.authService.loginUser(formValues.userName, formValues.password)
        }
    }

    cancel()
    {
        this.router.navigate(['events'])
    }

}
