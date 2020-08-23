import { NgModule } from '@angular/core';
// import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
  imports: [MatSidenavModule],
  exports: [MatSidenavModule],
})
export class MaterialModule {}
