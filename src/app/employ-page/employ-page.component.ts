import { EmployeesService } from './../employees.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-employ-page',
  templateUrl: './employ-page.component.html',
  styleUrls: ['./employ-page.component.scss'],
})
export class EmployPageComponent implements OnInit {
  public EmployLists = [];
  constructor(private _employeeService: EmployeesService) {}

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(
      (data) => {
        let employData = Object.values(data)[1];
        this.EmployLists = employData;
      },
      (err) => {
        this.ErrorMessage = err;
        this.isError = true;
      }
    );
  }
  public ErrorMessage;
  isError = false;
}
