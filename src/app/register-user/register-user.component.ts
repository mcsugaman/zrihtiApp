import { Component, OnInit, TemplateRef } from '@angular/core';
import {Router} from '@angular/router';

import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal';

import {UserAccountService} from '../services/accountServices/userAccount.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  model: any = {};
  userRegisterStatus: string;

  public modalRef: BsModalRef;


  constructor(private userAccountService: UserAccountService, private modalService: BsModalService) { }

  ngOnInit() {

  }


registerNewUser()
{
  this.userAccountService
      .registerNewUser(this.model.firstName, this.model.lastName, this.model.email, this.model.username, this.model.password)
      .then(result => {
        if(result === "Success1"){
          this.userRegisterStatus = "Uspešno ste se registrirali. Poslali smo vam potrditveno sporočilo na vaš elektronski naslov.";
        }else if(result ==="Error2"){
          this.userRegisterStatus = "Prišlo je do napake pri pošiljanju potrditvenega sporočila. Obrnite se na skrbnika strani."
        }else if(result === "Error1"){
          this.userRegisterStatus = "Uporabnik s tem elektronskim naslovom že obstaja.";
        }else {
          this.userRegisterStatus = "Prišlo je do neznane napake. Obrnite se na skrbnika strani.";
        }
      });
    
    //console.log("Username je: " + this.model.username + ", Geslo je : " + this.model.password );                            
}

}
