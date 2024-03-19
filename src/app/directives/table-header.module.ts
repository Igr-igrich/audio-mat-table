import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableHeaderDirective } from './table-header.directive';

@NgModule({
  declarations: [TableHeaderDirective],
  imports: [
    CommonModule
  ],
  exports: [TableHeaderDirective],
})
export class TableHeaderModule { }
