import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../services/employee.service';
import {  FormsModule } from '@angular/forms';
import { EmployeeUpdateComponent } from './employee-update.component';
import { ActivatedRoute } from '@angular/router';



@NgModule({
  declarations: [EmployeeUpdateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ActivatedRoute
  ],
  providers:[
    EmployeeService
  ]
})
export class EmployeeUpdateModule { }
