import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'stackoverflow-clone';
  constructor(private toastr:ToastrService) { }
  ngOnInit(): void {
    this.toastr.success('Hello world!', 'Toastr fun!');
    window.scrollTo(0, 0);
  }

}
