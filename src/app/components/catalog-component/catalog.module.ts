import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { IndexPageComponent } from './index-page/index-page.component';
import { AnvelopePageComponent } from './anvelope-page/anvelope-page.component';
import { PieseCaroseriePageComponent } from './piese-caroserie-page/piese-caroserie-page.component';
import { UleiuriLichidePageComponent } from './uleiuri-lichide-page/uleiuri-lichide-page.component';


@NgModule({
  declarations: [
    IndexPageComponent,
    AnvelopePageComponent,
    PieseCaroseriePageComponent,
    UleiuriLichidePageComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
  ]
})
export class CatalogModule { }
