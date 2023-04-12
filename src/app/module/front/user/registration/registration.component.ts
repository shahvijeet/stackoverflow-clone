import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {
  public signupForm !: FormGroup<any>;
  submitted = false;
    regForm!:FormGroup
    constructor(private fb: FormBuilder, private userService: UserService,
    private router:Router) { }
    ngOnInit() { this._initForm() }
    _initForm(){
      this.regForm = this.fb.group({
        displayName: new FormControl('', [Validators.required, ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        )])
    })
    }
  
    register() {
      const body = this.regForm.getRawValue()
      console.log(body);
      if (body) {
        this.userService.register(body).subscribe((res: any) => {
          console.log(res);
          if (res) {
          this.router.navigate(['/front/user/login'])
          }
          
        }, (error: any) => {
          console.log(error);
          
        })
      }
      
    }
  }
//   ngOnInit(): void {
//     window.scrollTo(0, 0);
//     this.signupForm = this.formBuider.group({

//       fullname:['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
      
//       email:['',[Validators.required,Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,8}$')]],
//       age:['',[Validators.required,Validators.max(100)]],
//       Password must contain at least one uppercase letter ((?=.*?[A-Z]))
//       Password must contain at least one lowercase letter ((?=.*?[a-z]))
//       Password must contain at least one digit ((?=.*?[0-9]))
//       Password must be between 6 and 8 characters long (.{6,8})
//        })
// }
// register(){
  
//   const body =this.signupForm.getRawValue();
    

// console.log(this.signupForm.value);
// if(body){
//   this.userservice.register(body).subscribe({next:(res:any)=>{
//     console.log(res);
//     alert('Registration Successfull');
//     if(res){
//       this.signupForm.reset();
//       this.router.navigate(['/frony/user/login']);
//     }
//   },
//   error:(err:any)=>{
//       console.log(err);
//         alert('Registration Failed');
        
//   }
//   })


// }
// }


