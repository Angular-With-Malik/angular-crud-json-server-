import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SharedModule } from '../shared/service/shared.module';
import { EmployeeService } from '../shared/service/employee/employee.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
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
