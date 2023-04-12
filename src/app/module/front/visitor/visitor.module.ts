import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { QuestionComponent } from './question/question.component';
import { TagComponent } from './tag/tag.component';
import { AskquestionComponent } from './askquestion/askquestion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    QuestionComponent,
    TagComponent,
    AskquestionComponent
  ],
  imports: [
    CommonModule,
    VisitorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VisitorModule { }
