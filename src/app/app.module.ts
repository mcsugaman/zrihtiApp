import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

/*Bootstrap komponente*/
import {ModalModule} from 'ngx-bootstrap/modal';
//////////////

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserLoginStatusComponent } from './user-login-status/user-login-status.component';
import { AuthGuard} from './services/accountServices/auth.guard';

import {AlertModule} from 'ngx-bootstrap';

import {UserAccountService} from './services/accountServices/userAccount.service';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ConfirmMailComponent } from './confirm-mail/confirm-mail.component';
import { RenewPasswordComponent } from './renew-password/renew-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    UserLoginStatusComponent,
    RegisterUserComponent,
    ConfirmMailComponent,
    RenewPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [
    UserAccountService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
