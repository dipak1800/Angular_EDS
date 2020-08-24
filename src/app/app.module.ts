import { UserAuthGuard } from './user-auth.guard';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AppSideNavComponent } from './app-side-nav/app-side-nav.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { EmployPageComponent } from './employ-page/employ-page.component';
import { EmployDetailsPageComponent } from './employ-details-page/employ-details-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomAgePipe } from './custom-age.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
    EmployDetailsPageComponent,
    PageNotFoundComponent,
    CustomAgePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent, UserAuthGuard],
})
export class AppModule {}
