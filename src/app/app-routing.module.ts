import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AdaugaPiesaComponent } from './components/adauga-piesa/adauga-piesa.component';

const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent
  },
  {
    path: "adauga-piesa",
    component: AdaugaPiesaComponent
  },
  {
    path: 'catalog',
    loadChildren: () => import('./components/catalog-component/catalog.module').then(module => module.CatalogModule)
  },
  {
    path: '**',
    redirectTo: "not-found",
    pathMatch: "full",
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
