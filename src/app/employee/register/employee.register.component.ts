import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { EmployeeService } from "src/app/services/employee.service";


@Component(
    {
        templateUrl: 'employee.register.component.html'
    })
export class EmployeeRegisterComponent implements OnInit{
    registerForm!: FormGroup;
    loading=false;
    submitted=false;
    constructor(
        private employeeService:EmployeeService,
        private router:Router,
        private formBuilder:FormBuilder
        ){
        }
    
    ngOnInit(): void {
        this.registerForm=this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            phone:['',[Validators.required]],
            city: ['', Validators.required],
            country: ['', Validators.required],
        });
        
    }
     get f() { return this.registerForm.controls; }

onSubmit(){
    this.submitted=true;
    if (this.registerForm.invalid) {
        return;
    }
    this.loading = true;
    
    this.employeeService.registerEmployee(this.registerForm.value)
    .pipe(first())
    .subscribe(
        data=>{
            
            this.router.navigate(['/login']);
        },
        error=>
        {
            this.loading=false;
        }
    )
}

}