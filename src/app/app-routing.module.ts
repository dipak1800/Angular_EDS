import { UserAuthGuard } from './user-auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppSideNavComponent } from './app-side-nav/app-side-nav.component';
import { EmployPageComponent } from './employ-page/employ-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployDetailsPageComponent } from './employ-details-page/employ-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: AppSideNavComponent,
  },
  {
    path: 'employees',
    component: EmployPageComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'employees/:id',
    component: EmployDetailsPageComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  EmployPageComponent,
  PageNotFoundComponent,
  AppSideNavComponent,
  EmployDetailsPageComponent,
];
