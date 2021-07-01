import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CapitaisComponent } from './capitais/capitais.component';
import { DxSelectBoxModule,
  DxTextBoxModule,
  DxButtonModule,
  DxTextAreaModule,
  DxDataGridModule,
  DxToolbarModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CapitaisComponent
  ],
  imports: [
    BrowserModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxButtonModule,
    DxTextAreaModule,
    DxDataGridModule,
    DxToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
