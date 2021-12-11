import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
import { PasswordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  hide=true;
  chide=true;

  message = "Registration Successful";
  action = "Login";

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  registrationForm: FormGroup = {} as FormGroup;

  constructor(private formBuilder: FormBuilder, private service: UserRegistrationService,
              private router: Router, private snackBar: MatSnackBar) { }

  get firstName()
  {
    return this.registrationForm.get('firstName');
  }

  get password()
  {
    return this.registrationForm.get('password');
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {validators: PasswordValidator});
  }

  onSubmit()
  {
    this.service.register(this.registrationForm.value).subscribe(data => console.log('Registration success.'));
    this.router.navigate(['login']);
  }

  openSnackBar(message: string, action: string)
  {
    this.snackBar.open(message, action, {duration: 5000, horizontalPosition: this.horizontalPosition, 
                                        verticalPosition: this.verticalPosition});
  }

}
