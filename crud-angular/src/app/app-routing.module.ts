import { EmployeeDetialsComponent } from './employee-detials/employee-detials.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path: 'employees',component:EmployeeListComponent},
  {path:'create-employee',component: CreateEmployeeComponent},
  {path:'',redirectTo:'employees',pathMatch:'full'},
  {path:'update-employee/:id',component: UpdateEmployeeComponent},
  {path:'employee-detials/:id',component: EmployeeDetialsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
