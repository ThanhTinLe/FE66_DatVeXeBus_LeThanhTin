import { DatVeXeBusModule } from './dat-ve-xe-bus/dat-ve-xe-bus.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    DatVeXeBusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
