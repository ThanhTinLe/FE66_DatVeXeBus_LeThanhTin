import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatVeXeBusComponent } from './dat-ve-xe-bus/dat-ve-xe-bus.component';



@NgModule({
  declarations: [
    DatVeXeBusComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DatVeXeBusComponent]
})
export class DatVeXeBusModule { }
