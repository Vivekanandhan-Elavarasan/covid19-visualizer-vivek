import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { TableComponent } from './table/table.component';
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import{AuthGuard} from '../app/auth.guard'

const routes: Routes = [
  {
    path:'',
    component: FirstpageComponent ,
    //canActivate: [AuthGuard]
 },
 {
  path:'table',
  component: TableComponent
 },
 { path: 'login', 
 component: LoginComponent
 },
  { path: 'register',
   component: RegisterComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//{ path: '', component: HomeComponent,  },