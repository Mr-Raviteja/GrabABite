import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data : any
  user !: Employee
  constructor(private employeeService:EmployeeService) {

  }
  title = 'angulardatatables';
  dtOptions: any={};
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    lengthMenu : [5, 10, 25],
      processing: true
    };
    this.loadAllUsers();

  }
  loadAllUsers(){ 
    //get request from web api https://www.testjsonapi.com/users/
    this.employeeService.getALLEmployees().subscribe((data: Employee | any) => {
     
       this.data = data;
       
     setTimeout(()=>{   
       $('#datatableexample').DataTable( {
         pagingType: 'full_numbers',
         pageLength: 10,
        processing: true,
         lengthMenu : [5, 10, 25]
     } );
     }, 1);
           }, (error: any) => console.error(error));


  }
  deleteUser(empId:number){
    this.employeeService.deleteEmployee(empId).pipe(first()).subscribe(()=>{
        this.loadAllUsers();
    });
  }
getUser(empId:number){
    this.employeeService.getEmployeeById(empId).pipe(first()).subscribe((data:Employee|any)=>{
        this.user=data
    })
}

saveUser(employee:Employee){
  this.employeeService.updateEmplooyee(employee);
}

}
