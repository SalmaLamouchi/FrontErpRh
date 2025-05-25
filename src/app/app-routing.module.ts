import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
   {path:'personnel',children:[
  {path:'',loadChildren:()=>import('./views/personnels/personnels.module').then(m=>m.PersonnelsModule)},
  
]}, 
   {path:'paie',children:[
  {path:'',loadChildren:()=>import('./views/paie/paie.module').then(m=>m.PaieModule)},
]},
{path:'conge',children:[
  {path:'',loadChildren:()=>import('./views/conge/conge.module').then(m=>m.CongeModule)},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
