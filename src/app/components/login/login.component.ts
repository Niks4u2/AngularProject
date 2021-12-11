import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/services/user-login.service';
import { Login } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup = {} as FormGroup;
  userEmail: string = "";
  user: Login = {} as Login;

  constructor(private formBuilder: FormBuilder, private loginService: UserLoginService, private router: Router) { }

  get email()
  {
    return this.loginForm.get('email');
  }

  get password()
  {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  login()
  {
    this.loginService.loginUser(this.loginForm.value).subscribe(
        res => { localStorage.setItem('token', res.jwt);
                 localStorage.setItem('email', this.loginForm.get('email')?.value);
                }
    );
    this.router.navigate(['home']);
  }

}
