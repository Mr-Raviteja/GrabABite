import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { HomeComponent } from './employee/home/home.component';
import { LoginComponent } from './employee/login/login.component';
import { EmployeeRegisterComponent } from './employee/register/employee.register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: EmployeeRegisterComponent },
  { path: 'update/:empId', component: EmployeeUpdateComponent, pathMatch: 'full' },

  //{ path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
