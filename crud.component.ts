import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../i-employee';
import { SEmployeeService } from '../s-employee.service';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {


  employees:IEmployee[];
  constructor(private _employeeService:SEmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(
    data =>{ this.employees = data }
    );
  }
  choice:boolean;
  status:string;
  index:number;
   

    addEmployee(id:number, name:string, salary:number, department:string){

      this.employees.push({empId:id, empName:name, empSal:salary, empDep:department});
      alert("Employee Added Successfuly");
    }

    updateEmployee(i:number,uid,uname,usalary,udept){
      this.index = i;
      uid.value = this.employees[i].empId;
      uname.value = this.employees[i].empName;
      usalary.value = this.employees[i].empSal;
      udept.value = this.employees[i].empDep;
    }

    updateOnClick(uid,uname,usalary,udept){
      this.employees[this.index].empId = uid.value;
      this.employees[this.index].empName = uname.value;
      this.employees[this.index].empSal = usalary.value;
      this.employees[this.index].empDep = udept.value;
      alert("Data succesfully updated");
      uid.value="";
      uname.value="";
      usalary.value="";
      udept.value="";
    }

    deleteOnClick(index){
     
      /*this._employeeService.deleteEmployee(employee.empId).subscribe(() =>{
        console.log("Employee deleted");
      });*/

      this.employees.splice(index,1);
    
    }

}
