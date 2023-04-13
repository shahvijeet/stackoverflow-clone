import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { askQuestion } from 'src/app/models/askquestion.model';
import { VisitorService } from 'src/app/services/visitor.service';

@Component({
  selector: 'app-askquestion',
  templateUrl: './askquestion.component.html',
  styleUrls: ['./askquestion.component.css']
})
export class AskquestionComponent implements OnInit {
  questionForm!: FormGroup;
  detailsInputEnabled = false;
  tagsInputEnabled = false;
  userData!:any
  constructor(private formBuilder: FormBuilder,private visitorservice:VisitorService) { }

  ngOnInit(): void {
    this.questionForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      details: new FormControl(''),
      tags: new FormControl('')
    });
  }

  enableDetailsInput() {
    this.detailsInputEnabled = true;
  }

  enableTagsInput() {
    this.tagsInputEnabled = true;
  }

 

  _add() {
    const data = this.questionForm.getRawValue()
    const tempData = localStorage.getItem('userData')
    if (tempData) {
      this.userData = JSON.parse(tempData) 
    }

    const tagData = data.tags.split(",");

    const body:askQuestion = {
      userID:this.userData.id,
      userName: this.userData.displayName,
      vote: 0,
      view: 0,
      title: data.title,
      qDescrition: data.details,
       tags: tagData,
      createdAt: new Date().toLocaleString(),
      answers: []
    }
    this.visitorservice.submitQue(body).subscribe(
      (res) => {
        console.log(res);
        // Handle next operation here
        alert('Question Submitted')
        this.questionForm.reset()
      },
      (err) => {
        console.error(err);
        // Handle error operation here
      }
    );
    console.log(body);

  }
}
