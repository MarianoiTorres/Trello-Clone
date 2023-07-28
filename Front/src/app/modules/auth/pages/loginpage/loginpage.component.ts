import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/interfaces/userRegister';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  constructor(public authService: AuthService, public router: Router){}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  onSubmit(): any {
    if(this.loginForm.valid)
    {
      this.authService.authLogin(this.loginForm.value as UserRegister).subscribe((response) => {
        if(response.name)
        {
          localStorage.setItem('userId', response._id)
          this.router.navigate(['board'])
        }
        else
        {
          console.log('usuario no existente ');
        }
      }) 
    }
  }
}
