import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonnelComponent } from './add-personnel/add-personnel.component';
import { EditPersonnelComponent } from './edit-personnel/edit-personnel.component';
import { ConsulterPersonnelComponent } from './consulter-personnel/consulter-personnel.component';
import { PayementComponent } from '../paie/payement/payement.component';
import { CongeComponent } from '../conge/conge/conge.component';

const routes: Routes = [
  {
    path: '',
    component: ConsulterPersonnelComponent,
  },{
    path:'editPersonnel/:id',
    component:EditPersonnelComponent
  },
  {path:'addPersonnel',component:AddPersonnelComponent},
  {path:'payment/:id',component:PayementComponent},
  {path:'conge/:id',component: CongeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnelsRoutingModule { 
 
}
