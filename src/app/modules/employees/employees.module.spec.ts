import { EmployeesModule } from './employees.module';

describe('EmployeesModule', () => {
  let employeesModule: EmployeesModule;

  beforeEach(() => {
    employeesModule = new EmployeesModule();
  });

  it('should create an instance', () => {
    expect(employeesModule).toBeTruthy();
  });
});
