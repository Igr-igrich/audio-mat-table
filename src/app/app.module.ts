import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableModule } from './components/table/table.module';
import { TableHeaderModule } from './directives/table-header.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    TableHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}