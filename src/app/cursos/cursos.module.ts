import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [CursosComponent],
  exports: [CursosComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CursosModule { }
