import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from '../../services/employee.service';
import { ResponseList } from '../../interfaces/employee';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  listEmployees: Employee[] = []

  constructor(private employeeService: EmployeeService) {
    this.employeeService.getList().subscribe((res) => {
      let { data } = res as ResponseList;
      this.listEmployees = data;
    });
  }

  ngOnInit(): void {
  }

}
