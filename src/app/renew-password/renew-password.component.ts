import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {UserAccountService} from '../services/accountServices/userAccount.service';

@Component({
  selector: 'app-renew-password',
  templateUrl: './renew-password.component.html',
  styleUrls: ['./renew-password.component.scss']
})
export class RenewPasswordComponent implements OnInit, OnDestroy {

  email: string;
  hash: string;

  private sub: any;
  
  model: any = {};
  renewPasswordStatus: string;

  constructor(private route: ActivatedRoute, private userAccountService: UserAccountService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.email = params['email']; //prvi parameter v URL-ju
      this.hash = params['hash']; //drugi parameter v URL-ju
  });
  }


  renewPasswordService(){
    this.userAccountService
      .renewPassword(this.email, this.model.password)
      .then(result => {
        if(result === "Success1"){
          this.renewPasswordStatus = "Uspešno ste posodobili svoje geslo. Vpišite se v sistem.";
        }else if(result === "Error1"){
          this.renewPasswordStatus = "Uporabnik s tem elektronskim naslovom ne obstaja. Obrnite se na skrbnika strani.";
        }else {
          this.renewPasswordStatus = "Prišlo je do neznane napake. Obrnite se na skrbnika strani.";
        }
      });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
