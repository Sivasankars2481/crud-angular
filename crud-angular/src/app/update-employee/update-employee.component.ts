import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
onSubmit() {
this.EmployeeService.updateEmployee(this.id,this.employee).subscribe(data=>
  {
    this.gotoEmployeeList();
  },error => console.log(error)
  );
}
  id: number;
  employee: Employee = new Employee();
constructor(private EmployeeService: EmployeeService ,
  private route: ActivatedRoute,private router:Router)
{

}
ngOnInit():void{
  this.id = this.route.snapshot.params['id'];
  this.EmployeeService.getEmployeeById(this.id).subscribe(data=>
    {
      this.employee = data;
    },error => console.log(error));
}
gotoEmployeeList()
{
  this.router.navigate(['/employees']);
}
}
