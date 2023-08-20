import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRegister } from 'src/app/interfaces/userRegister';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css'],
})
export class RegisterpageComponent {
  constructor(public authService: AuthService, public router: Router) {}

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    background: new FormControl(''),
  });

  emailFromHome: string = '';

  ngOnInit() {
    this.registerForm.patchValue({
      name: '',
      surname: '',
      email: history.state.email,
      password: '',
      background: ''
    });
  }

  onSubmit(): any {
    if (this.registerForm.valid) {
      const maxComponentValue = 100;
      const r = Math.floor(Math.random() * maxComponentValue);
      const g = Math.floor(Math.random() * maxComponentValue);
      const b = Math.floor(Math.random() * maxComponentValue);

      this.registerForm.patchValue({
        background: `rgb(${r}, ${g}, ${b})`
      });
      this.authService
        .authRegister(this.registerForm.value as UserRegister)
        .subscribe((response) => {
          if (response.name) {
            this.router.navigate(['auth/login']);
          }
        });
    } else {
      console.log(this.registerForm.valid);
    }
  }

  onInputValueChanged(controlName: string) {
    const control = this.registerForm.get(controlName);
    if (control) {
      control.updateValueAndValidity();
    }
  }
}
