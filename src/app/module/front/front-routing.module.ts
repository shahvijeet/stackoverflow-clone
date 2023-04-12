import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from 'src/app/pagenotfound/pagenotfound.component';

const routes: Routes = [
  
  {path:'visitor', loadChildren: () => import('./visitor/visitor.module').then(m => m.VisitorModule)},

  {path:'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},

  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
