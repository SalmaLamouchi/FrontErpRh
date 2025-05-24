import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    PersonnelsRoutingModule
  ]
})
export class PersonnelsModule { }
