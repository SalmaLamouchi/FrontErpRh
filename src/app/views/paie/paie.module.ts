import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaieRoutingModule } from './paie-routing.module';
import { EditPaieComponent } from './edit-paie/edit-paie.component';
import { AddPaieComponent } from './add-paie/add-paie.component';
import { ConsulterPaieComponent } from './consulter-paie/consulter-paie.component';


@NgModule({
  declarations: [
    EditPaieComponent,
    AddPaieComponent,
    ConsulterPaieComponent
  ],
  imports: [
    CommonModule,
    PaieRoutingModule
  ]
})
export class PaieModule { }
