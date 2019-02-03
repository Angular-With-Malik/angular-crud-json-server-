import { Injectable } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {

  mockUrl: string = 'http://localhost:3000/Employee';
  allEmployee: Employee[];

  currentEmployee: Employee = {
    id: null,
    firstName: '',
    lastName: '',
    code: '',
    contactNumber: null,
    address: ''
  }

  constructor(
    private http: HttpClient
  ) { }

  getAllEmployee() {
    return this.http.get(this.mockUrl).subscribe(
      (data: Employee[]) => {
        this.allEmployee = data;
        console.table(this.allEmployee);
      });
  }

  deleteEmployee(id: Number): Observable<Employee> {
    return this.http.delete<Employee>(this.mockUrl + '/' + id, headerOption);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.mockUrl, employee, headerOption);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.mockUrl + '/' + employee.id, employee, headerOption);
  }
}
