import { Component, OnInit } from "@angular/core";
import { Employee } from "../employee";
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from "../employee.service";


@Component({
  selector: 'app-employee-detials',
  templateUrl: './employee-detials.component.html',
  styleUrls: ['./employee-detials.component.css']
})
export class EmployeeDetialsComponent implements OnInit {

  id: number;
  employee: Employee
  constructor(private route :ActivatedRoute,private employeeService: EmployeeService)
  {

  }
  ngOnInit(): void{
    this.id =this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data =>
      {
        this.employee=data;
      })
  }
}
