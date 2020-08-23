import { EmployeesService } from './../employees.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employ-details-page',
  templateUrl: './employ-details-page.component.html',
  styleUrls: ['./employ-details-page.component.scss'],
})
export class EmployDetailsPageComponent implements OnInit {
  constructor(private _employeeService: EmployeesService) {}
  listOfEmployees = [];
  ngOnInit() {
    // this.listOfEmployees = this._employeeService.getEmployees();
  }
}
