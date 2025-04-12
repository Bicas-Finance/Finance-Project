import { Component } from '@angular/core';
import {ProfileService} from '../../services/profile.service';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-sign-in',
  imports: [
    FormsModule,
    MatLabel,
    MatFormField,
    MatInput,
    MatLabel,
    RouterLink,
    MatError,
    NgIf,
    MatFormField,
    MatButton
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  emailLabel: string = 'Email';
  passwordLabel: string = 'Password';
  registerText: string = "Don't have an account? Register here";

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private profileService: ProfileService, private router: Router) { }

  onSubmit(){
    this.profileService.SignIn(this.email, this.password).subscribe(
      (users)=> {
        if (users.length > 0) {
          this.router.navigate(['/Home']);
        } else {
          this.errorMessage = 'Invalid email or password';
        }
      },
        (error)=>{
          this.errorMessage = 'An error occurred';
          console.log(error);
        }
    )
  }
}
