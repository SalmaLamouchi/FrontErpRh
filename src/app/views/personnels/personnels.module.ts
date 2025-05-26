
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';  
import { MaterialModule } from '../../material/material.module'; 

import { PersonnelsRoutingModule } from './personnels-routing.module';

import { AddPersonnelComponent } from './add-personnel/add-personnel.component';
import { EditPersonnelComponent } from './edit-personnel/edit-personnel.component';
import { ConsulterPersonnelComponent } from './consulter-personnel/consulter-personnel.component';

@NgModule({
  declarations: [
    AddPersonnelComponent,
    EditPersonnelComponent,
    ConsulterPersonnelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,         
    MaterialModule,      
    PersonnelsRoutingModule
  ]
})
export class PersonnelsModule { }
