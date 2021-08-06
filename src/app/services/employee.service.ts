import{Injectable} from '@angular/core'
import{HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Employee } from '../models/employee'; 


@Injectable()
export class EmployeeService{
private api = "http://localhost:9595/api";
    constructor(private http: HttpClient){}

    getALLEmployees(){
        return this.http.get<Employee[]>(this.api+`/employees`);
    }
    
    getEmployeeById(empid:number){
        return this.http.get(this.api+'/employees/'+ empid);
    }
    registerEmployee(employee:Employee){
        return this.http.post(this.api+'/employees',employee);
    }
    updateEmplooyee(employee:Employee){
        return this.http.put(this.api+'/employee/'+ employee.empId,employee);
    }
    deleteEmployee(empId:number){
        return this.http.delete(this.api+'/employee/'+empId);
    }
    authCheck(email:string,password:string){
        const param =new HttpParams();
        const headers = new HttpHeaders()
    .append(
      'Content-Type',
      'application/json'
    );
        let body=JSON.stringify("");
        param.append('email',email);
        param.append('password',password);
        return this.http.post(this.api+'/login',body,{
            headers:headers,
            params:param
        });
    }

}








