import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ComponentsComponent
  ]
})
export class ComponentsModule { }
