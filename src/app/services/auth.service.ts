import {Injectable} from '@angular/core';
import { IUser } from '../user/user.model';

// declare let toastr:any

@Injectable()
export class AuthService
{
    currentUser:IUser
   
    isAuthenticated()
    {
        return !!this.currentUser;
    }

    loginUser(userName:string, password:string)
    {
        console.info("Inside AuthService.loginUser()")

        this.currentUser = {
            id:1,
            userName: userName,
            firstName: 'Kunal',
            lastName:'RR'

        }

        console.info("End of AuthService.loginUser()")
    }

    updateCurrentUser(firstName:string, lastName:string)
    {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
        
    }
    
    //  errorMessage(msgString: string, title?: string)
    // {
    //     toastr.error(msgString, title);
    // }
}