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
import {CollapseModule} from 'ngx-bootstrap';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import {UserAccountService} from './services/accountServices/userAccount.service';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ConfirmMailComponent } from './confirm-mail/confirm-mail.component';
import { RenewPasswordComponent } from './renew-password/renew-password.component';
import { SearchFiltersComponent } from './search-filters/search-filters.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    UserLoginStatusComponent,
    RegisterUserComponent,
    ConfirmMailComponent,
    RenewPasswordComponent,
    SearchFiltersComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    InfiniteScrollModule
  ],
  providers: [
    UserAccountService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
