import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonnelComponent } from './add-personnel/add-personnel.component';
import { EditPersonnelComponent } from './edit-personnel/edit-personnel.component';
import { ConsulterPersonnelComponent } from './consulter-personnel/consulter-personnel.component';

const routes: Routes = [
  {
    path: '',
    component: ConsulterPersonnelComponent,
  },{
    path:'editPersonnel',
    component:EditPersonnelComponent
  },
  {path:'addPersonnel',component:AddPersonnelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnelsRoutingModule { 
 
}
