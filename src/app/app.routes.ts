import { Routes } from '@angular/router';
import {SignUpComponent} from './startup/pages/sign-up/sign-up.component';
import {SignInComponent} from './startup/pages/sign-in/sign-in.component';
import {HomeComponent} from './public/pages/home/home.component';

export const routes: Routes = [
  {path: 'SignUp', component: SignUpComponent},
  {path: 'SignIn', component: SignInComponent},
  {path: 'Home', component: HomeComponent},
  {path: '', redirectTo: '/SignUp', pathMatch: 'full'}
];
