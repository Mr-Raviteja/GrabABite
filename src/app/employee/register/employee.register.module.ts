import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRegisterComponent } from './employee.register.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    EmployeeRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
  providers:[
    EmployeeService
  ]
})
export class RegisterModule { }
