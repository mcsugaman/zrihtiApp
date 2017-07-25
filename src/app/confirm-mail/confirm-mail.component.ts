import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {UserAccountService} from '../services/accountServices/userAccount.service';

@Component({
  selector: 'app-confirm-mail',
  templateUrl: './confirm-mail.component.html',
  styleUrls: ['./confirm-mail.component.scss']
})
export class ConfirmMailComponent implements OnInit, OnDestroy {

  email: string;
  hash: string;

  private sub: any;

  confirmMailMessage: string;

  constructor(private route: ActivatedRoute, private userAccountService: UserAccountService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.email = params['email']; //prvi parameter v URL-ju
      this.hash = params['hash']; //drugi parameter v URL-ju

      this.confirmMail(this.email, this.hash);

    });
    //alert("Email je: " + this.email + " Hash pa je: " + this.hash);

  }

  confirmMail(email: string, hash: string)
{
  this.userAccountService
      .confirmMail(email, hash)
      .then(result => {
        if(result === "Error1"){
          this.confirmMailMessage = "Uporabnik s tem elektronskim naslovom ne obstaja. Registrirajte se.";
        }else if(result ==="Success1"){
          this.confirmMailMessage = "Uspešno ste potrdili svoj elektronski naslov. Vpišite se v sistem."
        }else if(result === "Error2"){
          this.confirmMailMessage = "Prišlo je do napake. Vaša potrditvena koda ni pravilna. Obrnite se na skrbnika strani.";
        }else {
          this.confirmMailMessage = "Prišlo je do neznane napake. Obrnite se na skrbnika strani.";
        }
      });
    
    //console.log("Username je: " + this.model.username + ", Geslo je : " + this.model.password );                            
}


  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
