import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChonGheComponent } from './chon-ghe/chon-ghe.component';
import { GetDaChonComponent } from './get-da-chon/get-da-chon.component';
import { DatVeXeBusComponent } from './dat-ve-xe-bus/dat-ve-xe-bus.component';



@NgModule({
  declarations: [
    ChonGheComponent,
    GetDaChonComponent,
    DatVeXeBusComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DatVeXeBusComponent]
})
export class DatVeXeBusModule { }
