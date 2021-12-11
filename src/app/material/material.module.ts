import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';


const Materials = [
  MatIconModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatGridListModule,
  MatCardModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatTableModule,
  MatListModule,
  MatBadgeModule
];

@NgModule({
  imports: [Materials],
  exports: [Materials]
})
export class MaterialModule { }
