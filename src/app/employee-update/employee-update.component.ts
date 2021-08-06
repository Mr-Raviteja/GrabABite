import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  user!:Employee
  updateForm!: FormGroup;
  submitted!: boolean;
  loading!: boolean;
  id!: number;
  data: any;


  constructor(private employeeService:EmployeeService,
    private formBuilder:FormBuilder,private route:ActivatedRoute,private router:Router
    ) {
      
      } 

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['empId'];
    this.employeeService.getEmployeeById(this.id).pipe(first()).subscribe((data:Employee|any)=>{
    this.user=data
  });
    this.updateForm=this.formBuilder.group({
      empId:   [{ disabled : true}],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone:['',[Validators.required]],
      city: ['', Validators.required],
      country: ['', Validators.required],
  });
  

  }
  get f() { return this.updateForm.controls; }
  onSubmit(){
    this.submitted=true;
    if (this.updateForm.invalid) {
        return;
    }
    this.loading = true;
    
    this.router.navigate(['/home'], { relativeTo: this.route });

 
}
}
