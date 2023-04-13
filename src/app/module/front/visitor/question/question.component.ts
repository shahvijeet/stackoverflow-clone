import { Component, OnInit } from '@angular/core';
import { VisitorService } from 'src/app/services/visitor.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  Question: any[]  = [];
  constructor(private visitorService:VisitorService) { }

  ngOnInit(): void {
    this.visitorService.getQue().subscribe(
      (res:object) => {
        // console.log(res);
        this.Question = res as any[];
        console.log("Data",this.Question);
        
        // Handle success operation here
      },
      (err) => {
        console.error(err);
        // Handle error operation here
      }
    );
  }




}
