import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee, ResponseList, ResponseOne } from '../../interfaces/employee';
import { AppModule } from '../../app.module';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
})
export class ConsultaComponent implements OnInit {
  form: { ipc: number; id: string } = { ipc: 0, id: '' };
  newIpc: number = 0;
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {}

  handleClick() {
    this.employeeService.find(this.form.id).subscribe((res) => {
      this.employee = (res as ResponseOne).data;
      this.newIpc = this.employee.employee_salary * (this.form.ipc / 100) + 1;
    });
  }
}
