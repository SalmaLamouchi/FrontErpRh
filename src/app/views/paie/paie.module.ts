import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPaieComponent } from './add-paie/add-paie.component';
import { EditPaieComponent } from './edit-paie/edit-paie.component';
import { ConsulterPaieComponent } from './consulter-paie/consulter-paie.component';
import { PaieRoutingModule } from './paie-routing.module';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
//angular material
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
@NgModule({
  declarations: [
    AddPaieComponent,
    EditPaieComponent,
    ConsulterPaieComponent
  ],
  imports: [
    CommonModule,MatSelectModule,
    PaieRoutingModule,MatOptionModule,
    FormsModule,
    MatTabsModule,
    //angular material modules
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class PaieModule { }
