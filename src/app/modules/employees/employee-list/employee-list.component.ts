import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/service/employee/employee.service';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.employeeService.getAllEmployee();
  }

  editEmployee(employee: Employee) {
    this.employeeService.currentEmployee = Object.assign({}, employee);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      (data) => {
        this.getAllEmployee();
      });
  }
}
