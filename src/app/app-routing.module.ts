import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {RegisterUserComponent} from './register-user/register-user.component';
import {ConfirmMailComponent} from './confirm-mail/confirm-mail.component';
import {RenewPasswordComponent} from './renew-password/renew-password.component';
 
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'registerNewUser', component: RegisterUserComponent },
  { path: 'confirmMail/:email/:hash', component: ConfirmMailComponent },
  { path: 'renewPassword/:email/:hash', component: RenewPasswordComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
