import {Injectable} from '@angular/core';

declare let toastr:any

@Injectable()
export class ToastrService
{
    
    successMessage(msgString: string, title?: string)
    {
        toastr.success(msgString, title);
    }
    infoMessage(msgString: string, title?: string)
    {
        toastr.info(msgString, title);
    }
    warnMessage(msgString: string, title?: string)
    {
        toastr.console.warn(msgString, title); 
    }
    errorMessage(msgString: string, title?: string)
    {
        toastr.error(msgString, title);
    }
}