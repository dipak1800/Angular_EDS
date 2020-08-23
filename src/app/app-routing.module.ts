import { AppSideNavComponent } from './app-side-nav/app-side-nav.component';
import { EmployPageComponent } from './employ-page/employ-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppSideNavComponent,
  },
  {
    path: 'employees',
    component: EmployPageComponent,
  },
  // {
  //   path: 'employees:id',
  //   component: EmployPageComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [EmployPageComponent, AppSideNavComponent];
