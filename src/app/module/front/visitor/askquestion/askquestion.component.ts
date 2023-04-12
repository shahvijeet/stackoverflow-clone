import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-askquestion',
  templateUrl: './askquestion.component.html',
  styleUrls: ['./askquestion.component.css']
})
export class AskquestionComponent implements OnInit {
  questionForm!: FormGroup;
  detailsInputEnabled = false;
  tagsInputEnabled = false;

  constructor(private formBuilder: FormBuilder) { }

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

  submitQuestion() {
    // do something with the form data
  }
}
