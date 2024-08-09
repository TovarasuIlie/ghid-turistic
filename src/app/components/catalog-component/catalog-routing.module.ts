import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnvelopePageComponent } from './anvelope-page/anvelope-page.component';
import { UleiuriLichidePageComponent } from './uleiuri-lichide-page/uleiuri-lichide-page.component';
import { PieseCaroseriePageComponent } from './piese-caroserie-page/piese-caroserie-page.component';
import { IndexPageComponent } from './index-page/index-page.component';

const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent
  },
  {
    path: 'anvelope',
    component: AnvelopePageComponent
  },
  {
    path: 'uleiuri-si-lichide',
    component: UleiuriLichidePageComponent
  },
  {
    path: 'piese-caroserie',
    component: PieseCaroseriePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
