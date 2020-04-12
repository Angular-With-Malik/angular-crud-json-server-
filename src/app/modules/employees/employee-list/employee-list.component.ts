import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/service/employee/employee.service';
import { Employee } from 'src/app/model/employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.employeeService.getAllEmployee();
  }

  editEmployee(employee: Employee) {
    this.employeeService.currentEmployee = Object.assign({}, employee);
    this.toastrService.warning('Employee edited successfully !', 'Employee CRUD');
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      (data) => {
        this.getAllEmployee();
        this.toastrService.error('Employee deleted successfully !', 'Employee CRUD');
      });
  }
}
