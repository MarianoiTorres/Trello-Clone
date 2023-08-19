import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserRegister } from 'src/app/interfaces/userRegister';
import { AuthService } from 'src/app/services/auth/auth.service';
import { loadUser } from 'src/app/state/actions/user.action';
import { selectUser } from 'src/app/state/selectors/user.selectors';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  constructor(public router: Router, private store: Store<any>){}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  user$ = this.store.select(selectUser)

  onSubmit(): any {
    if(this.loginForm.valid)
    {
      this.store.dispatch(loadUser({data: this.loginForm.value as UserRegister}))
      
      this.user$.subscribe((response) => {
        if(response.name)
        {
          console.log(response);
          
          this.router.navigate(['board'])
        }
        else
        {
          console.log(response);
          
          console.log('usuario no existente ');
        }
      }) 
    }
  }
}
