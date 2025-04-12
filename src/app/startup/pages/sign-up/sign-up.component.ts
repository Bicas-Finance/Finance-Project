import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {ProfileService} from '../../services/profile.service';
import {NgIf} from '@angular/common';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-sign-up',
  imports: [
    ReactiveFormsModule,
    NgIf,
    RouterLink,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatError,
    MatFormField,
    MatInput,
    MatButton
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(private profileService: ProfileService, private fb: FormBuilder, private router: Router){
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    if(this.signUpForm.valid){
      const user = this.signUpForm.value;
      this.profileService.SignUp(user).subscribe(
        (response) =>{
          console.log('Registered User',response);
          this.router.navigate(['/SignIn']);
        },
        (error) =>{
          console.log('Error during registration:',error);
        }
      );
    }
  }
}
