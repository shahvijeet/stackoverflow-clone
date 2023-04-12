import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
userData:any
  constructor(private router:Router) { }

  ngOnInit() {
 
    this.router.events.subscribe((res:any) => {
      // debugger
      if (res.url) {
        const data = localStorage.getItem('userData')
        if (data) {
          this.userData = JSON.parse(data)
        }
      }
    })


  }
  _navigateToLogin() {
    this.router.navigate(['/front/user/login'])
  }
  _navigateToRegister() {
    this.router.navigate(['/front/user/registration'])
  }

}



