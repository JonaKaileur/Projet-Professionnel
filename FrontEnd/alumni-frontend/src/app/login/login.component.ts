import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AddPostComponent } from "../add-post/add-post.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AddPostComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router){}

  /*login(username: string, password: string){
    if (this.authService.login(username,password)){
      this.router.navigate(['home']);
    }
    else{
      this.errorMessage = 'Identifiants incorrects';
    }
  }*/
 /*
  async login(username: string, password: string) {
    const isAuthenticated = await this.authService.login(username, password);
    
    if (isAuthenticated) {
      this.router.navigate(['home']);
    } else {
      this.errorMessage = 'Identifiants incorrects';
    }
  }*/
}
