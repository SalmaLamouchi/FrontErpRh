import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCongeComponent } from './add-conge/add-conge.component';
import { EditCongeComponent } from './edit-conge/edit-conge.component';
import { ConsulteCongeComponent } from './consulte-conge/consulte-conge.component';

const routes: Routes = [
  { path: '', component: ConsulteCongeComponent },
  { path: 'addConge', component: AddCongeComponent },
  { path: 'editConge', component: EditCongeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CongeRoutingModule { }
