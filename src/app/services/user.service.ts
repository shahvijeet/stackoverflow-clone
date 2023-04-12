import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 baseUrl = environment.baseurl;
 user = environment.userdata;
  
 constructor(private http: HttpClient) { }

  login() {
    try {
      return this.http.get<any>(this.baseUrl + this.user );
    }
    catch (error) { return throwError(()=>{
      new Error('Error in Login')
    })
    }
  }

    register(data: any){
    try {
      return this.http.post<any>(this.baseUrl + this.user , data);
    }
    catch (error) {
      return throwError(()=>{
        new Error('Error in register')
      })
    }
     }
} 
