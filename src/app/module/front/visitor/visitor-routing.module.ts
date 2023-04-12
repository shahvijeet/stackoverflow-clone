import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { TagComponent } from './tag/tag.component';
import { AskquestionComponent } from './askquestion/askquestion.component';

const routes: Routes = [
  {path:'question',component:QuestionComponent},
  {path:'question/:id',component:QuestionComponent},
  {path:'tag',component:TagComponent},
  {path:'askquestion',component:AskquestionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
