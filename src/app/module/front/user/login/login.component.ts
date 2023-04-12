import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
 
  loginForm !: FormGroup
  userData!: any
  LogginFails:boolean = false
  constructor(private formBuilder: FormBuilder,
  private userService:UserService) {
   
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  this.initLoginForm()
  }
  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        )
      ])
    });
  }


  _loginUser() {
    const body = this.loginForm.getRawValue()
    console.log(body);
    
    this.userService.login().subscribe((res) => {
      this.userData = res
      this.userData.forEach((item:any) => {
        if (item.email == body.username && item.password == body.password) {
          localStorage.setItem('userData',JSON.stringify(item))
          alert('Login Success')
          window.location.href = '/home'
          this.LogginFails = false
        }
      });
    })
  
    
  }
}
