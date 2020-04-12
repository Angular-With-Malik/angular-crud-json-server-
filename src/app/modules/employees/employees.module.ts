import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from '../shared/service/employee/employee.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    EmployeeComponent,
    EmployeeListComponent
  ],
  exports: [
    EmployeeComponent,
    EmployeeListComponent
  ],
  providers: [
    EmployeeService
  ]
})
export class EmployeesModule { }
