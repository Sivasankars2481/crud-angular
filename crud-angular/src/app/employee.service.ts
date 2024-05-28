import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:4030/api/v1/employees";
  constructor(private HttpClient: HttpClient) { }

  getEmployeesList() : Observable<Employee[]>{
    return this.HttpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.HttpClient.post((`${this.baseURL}`), employee);
  }

  getEmployeeById(id:number):Observable<Employee>
  {
    return this.HttpClient.get<Employee>(`${this.baseURL}/${id}`);
  }
  updateEmployee(id: number,employee :Employee): Observable<Object>{
      return this.HttpClient.put(`${this.baseURL}/${id}`,employee);
    }
  deleteEmployee(id: number): Observable<object>
  {
      return this.HttpClient.delete(`${this.baseURL}/${id}`);
  }
}
