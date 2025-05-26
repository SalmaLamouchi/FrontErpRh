import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPaieComponent } from './add-paie/add-paie.component';
import { EditPaieComponent } from './edit-paie/edit-paie.component';
import { ConsulterPaieComponent } from './consulter-paie/consulter-paie.component';

const routes: Routes = [
  { path: '', component: ConsulterPaieComponent },
  { path: 'addPaie', component: AddPaieComponent },
  { path: 'editPaie', component: EditPaieComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaieRoutingModule { }
