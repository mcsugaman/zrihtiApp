import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate
{
    constructor(private router: Router){}

    canActivate()
    {
        if(localStorage.getItem('currentUser')){
            //uporabnik je logiran, zato vrnemo true
            return true;
        }

        //ce uporabnik ni loginan
        //console.log(this.router.url);
        this.router.navigate(['/home']);
        alert("Za vstop na to področje morate biti prijavljeni v sistem !");
        return false;
    }

}