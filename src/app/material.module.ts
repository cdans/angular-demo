import {NgModule} from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  exports: [
    MatTabsModule,
    MatButtonModule,
  ],
  imports: [
    MatTabsModule,
    MatButtonModule,
  ]
})
export class MaterialModule {
}
