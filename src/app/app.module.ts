import { NgModule } from '@angular/core';
import {   HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './employee/login/login.module';
import { RegisterModule } from './employee/register/employee.register.module';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployeeService } from './services/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './employee/home/home.module';
import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common';
import { EmployeeUpdateModule } from './employee-update/employee-update.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    LoginModule,
    RegisterModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    HomeModule,
    CommonModule,
    NgbModule
  ],
  providers: [
     EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
