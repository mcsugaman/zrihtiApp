import { Component, OnInit, TemplateRef } from '@angular/core';
import {Router} from '@angular/router';

import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal';


import {User} from '../models/User';
import {UserAccountService} from '../services/accountServices/userAccount.service';

@Component({
  selector: 'app-user-login-status',
  templateUrl: './user-login-status.component.html',
  styleUrls: ['./user-login-status.component.scss']
})
export class UserLoginStatusComponent implements OnInit {

  public user: User;
  currentUser; any;
  NotLoggedInText: string;
  LogInText: string;

  loading = false;
  error='';

  public modalRef: BsModalRef;

  model:any = {};

  constructor(private router: Router, private modalService: BsModalService,  private userAccountService: UserAccountService) 
  {

  }

  ngOnInit() {
    this.user = new User();
    if(this.userAccountService.isUserLoggedIn() == true){
      this.user.Username = this.userAccountService.getCurrentUser().Username;
    }else {
      this.LogInText = "Prijavi se";
      this.NotLoggedInText = "Niste prijavljeni";
    }
  }//ngOnInit

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  LogIn(){
    this.loading = true;
    this.userAccountService.login(this.model.username, this.model.password)
      .subscribe(result => {
        if(result == true){
          //login je bil successfull
          this.modalRef.hide();
          this.user.Username = this.userAccountService.getCurrentUser().Username;
          this.router.navigate(['/']);
        }else {
          //ce je login failed
          
          this.error = "Uporabniško ime ali geslo je napačno !";
          this.loading = false;
        }
      });
    //this.popup.hide();
  }

  LogOut(){
    this.userAccountService.logout();
    this.ngOnInit();
    this.router.navigate(['/home']);
  }

  RegisterNewUser(template: TemplateRef<any>){
  this.modalRef.hide();
  this.router.navigate(['/registerNewUser']);
  }



}
