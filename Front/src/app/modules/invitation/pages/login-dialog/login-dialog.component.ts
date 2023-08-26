import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserRegister } from 'src/app/interfaces/userRegister';
import { loadUser } from 'src/app/state/actions/user.action';
import { selectUser } from 'src/app/state/selectors/user.selectors';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {

  constructor(private store: Store<any>, private dialogRef: DialogRef){}

  loginFormDialog = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

 user$ = this.store.select(selectUser)

  onSubmit(): any {
    if(this.loginFormDialog.valid)
    {
      this.store.dispatch(loadUser({data: this.loginFormDialog.value as UserRegister}))
      console.log(this.loginFormDialog);
      this.user$.subscribe((response) => {
        if(response.name)
        {
          this.dialogRef.close()
        }
      }) 
    }
  }
}
