import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCongeComponent } from './edit-conge/edit-conge.component';
import { AddCongeComponent } from './add-conge/add-conge.component';
import { ConsulteCongeComponent } from './consulte-conge/consulte-conge.component';

const routes: Routes = [
  {path:'editconge', component:EditCongeComponent},
  {path:'addconge', component:AddCongeComponent},
  {path:'', component:ConsulteCongeComponent},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CongeRoutingModule { }
