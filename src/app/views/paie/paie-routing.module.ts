import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPaieComponent } from './edit-paie/edit-paie.component';
import { AddPaieComponent } from './add-paie/add-paie.component';
import { ConsulterPaieComponent } from './consulter-paie/consulter-paie.component';

const routes: Routes = [
    {path:'editpaie', component:EditPaieComponent},
    {path:'addpaie ', component:AddPaieComponent},
    {path:'', component:ConsulterPaieComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaieRoutingModule { }
