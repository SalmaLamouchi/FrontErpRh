import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CongeRoutingModule } from './conge-routing.module';
import { EditCongeComponent } from './edit-conge/edit-conge.component';
import { AddCongeComponent } from './add-conge/add-conge.component';
import { ConsulteCongeComponent } from './consulte-conge/consulte-conge.component';

import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CongeComponent } from './conge/conge.component';

@NgModule({
  declarations: [
    EditCongeComponent,
    AddCongeComponent,
    ConsulteCongeComponent,
    CongeComponent
  ],
  imports: [
    CommonModule,
    CongeRoutingModule,
    MaterialModule,  //module angular material
    FormsModule   ,   //pour ngModel
    HttpClientModule
  ]
})
export class CongeModule { }
