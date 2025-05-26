import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, //route racine vers home
  { path: 'personnel', loadChildren: () => import('./views/personnels/personnels.module').then(m => m.PersonnelsModule) },
  { path: 'paie', loadChildren: () => import('./views/paie/paie.module').then(m => m.PaieModule) },
  { path: 'conge', loadChildren: () => import('./views/conge/conge.module').then(m => m.CongeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
