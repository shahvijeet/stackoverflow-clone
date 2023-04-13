import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {
    baseurl=environment.baseurl
    questionurl=environment.question

  constructor(private http:HttpClient) { }
  
  submitQue(data:any){
    try{
      return this.http.post(this.baseurl+this.questionurl,data)
    }catch(error:any){
      return throwError(() => {
        new Error(error)
      })
    }
  }
  getQue(){
    try{
      return this.http.get(this.baseurl+this.questionurl)
    }catch(error:any){
      return throwError(() => {
        new Error(error)
      })
    }
  }
}
