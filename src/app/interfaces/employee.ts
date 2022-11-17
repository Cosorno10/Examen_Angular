export class Employee {
    id: number = 0;
    employee_name: string = "";
    employee_salary: number = 0;
    employee_age: number = 0;
    profile_image: string = "";
}


export interface ResponseList  {
    status: number;
    data: Employee[];
}

export interface ResponseOne  {
    status: number;
    data: Employee;
}