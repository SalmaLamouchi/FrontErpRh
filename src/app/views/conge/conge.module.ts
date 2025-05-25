import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CongeRoutingModule } from './conge-routing.module';
import { EditCongeComponent } from './edit-conge/edit-conge.component';
import { AddCongeComponent } from './add-conge/add-conge.component';
import { ConsulteCongeComponent } from './consulte-conge/consulte-conge.component';


@NgModule({
  declarations: [
    EditCongeComponent,
    AddCongeComponent,
    ConsulteCongeComponent
  ],
  imports: [
    CommonModule,
    CongeRoutingModule
  ]
})
export class CongeModule { }
