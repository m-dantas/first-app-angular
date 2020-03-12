import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CursosComponent } from "./cursos/cursos.component";
import { DiretivasComponent } from "./diretivas/diretivas.component";

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    DiretivasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
