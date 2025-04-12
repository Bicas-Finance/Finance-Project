import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileService} from './startup/services/profile.service';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FinanzasProject';
  options = [
    { path: '/SignIn', title: 'Sign In' },
    { path: '/SignUp', title: 'Sign Up' },
  ];

  navOptions: { path: string, title: string }[] = [];
  constructor(private profileService: ProfileService){}

  ngOnInit(): void{
    this.updateNavOptions();
    console.log('navOptions after the initiation ',this.navOptions);
  }
  updateNavOptions(): void{
    const userId = this.profileService.getUserId();
    console.log('User Id',userId);

    //start with standard options
    this.navOptions = [...this.options];

    //update the options of navigation
    this.navOptions = [
      ...this.options.filter(opt => opt.path !== '/SignIn' && opt.path !== '/SignUp')
    ];
    console.log('navOptions after the update ',this.navOptions);
  }
}
