import { EmployeesService } from './../employees.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '.app-employ-page',
  templateUrl: './employ-page.component.html',
  styleUrls: ['./employ-page.component.scss'],
})
export class EmployPageComponent implements OnInit {
  public EmployLists = [];
  constructor(
    private _employeeService: EmployeesService,
    private _router: Router
  ) {}

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
  handleRouting(employ) {
    this._router.navigate(['/employees', employ.id]);
  }
  public ErrorMessage;
  isError = false;
}
