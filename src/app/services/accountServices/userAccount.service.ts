import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import {AppSettings} from '../../configuration/AppSettings';
import {User} from '../../models/User';

@Injectable()
export class UserAccountService{

    appSettings: AppSettings;
    public token: string;

    constructor(private http: Http){
        this.appSettings = new AppSettings();
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    isUserLoggedIn(): boolean{
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(currentUser != null){
            return true;
        }else {
            return false;
        }
    }

    getCurrentUser(): User {
        var currentuser = JSON.parse(localStorage.getItem('currentUser'));
        let user: User = new User();
        user.Username = currentuser.username;
        return user;
    }

    login(username: string, password: string): Observable<boolean>{
        var body = 'username=' + username + '&password=' +  password;
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
        let options = new RequestOptions({headers: headers});
        
         return this.http.post(this.appSettings.serviceUrl + 'token', body, options) 
            .map((response: Response) => {
            //login je uspesen, ce v odgovoru dobimo TOKEN
            let token = response.json() && response.json().access_token;
            //console.log("Response JSON : " + response.json() + "    Response.json.token: " + response.json().access_token);
            if(token){
                //ce je TOKEN v odgovoru, ga nastavimo
                this.token = token;

                ////username in token shranimo v local storage, da user ostane logiran med refreshi page-ov
                localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));

                //vrnemo true, kar pomeni, da se je user uspesno logiral
                return true;
            }else {
                //ce se ni uspesno logiral, vrnemo false
                return false;
            }
            });
    }

    logout() :void {
        //user-ja izbrisemo iz local storage-a in pobrisemo token
        this.token = null;
        localStorage.removeItem('currentUser');
    }


    registerNewUser(email: string, username:string, password:string) {
    var response;
    let params: URLSearchParams = new URLSearchParams();
    params.append('email', email);
    params.append('username', username);
    params.append('password', password);
    //var body = 'username=' + username + '&password=' +  password;
    return this.http.post(this.appSettings.serviceUrl + 'AccountApi/registerNewUser', params)
                    .toPromise()
                    .then((response) => response.text().toString());

    }


    confirmMail(email: string, hash: string){
        let params: URLSearchParams = new URLSearchParams();
        params.append('email', email);
        params.append('hash', hash);
        //var body = 'username=' + username + '&password=' +  password;
        return this.http.post(this.appSettings.serviceUrl + 'AccountApi/confirmMail', params)
                    .toPromise()
                    .then((response) => response.text().toString());
    }


}