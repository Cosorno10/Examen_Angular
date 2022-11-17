import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get(`http://dummy.restapiexample.com/api/v1/employees`);
  }

  find(id: string = '') {
    return this.http.get(
      `http://dummy.restapiexample.com/api/v1/employee/${id}`
    );
  }
}
