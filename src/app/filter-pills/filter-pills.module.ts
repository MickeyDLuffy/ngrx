import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterPillsRoutingModule } from './filter-pills-routing.module';
import { FilterPillsComponent } from './filter-pills.component';


@NgModule({
  declarations: [FilterPillsComponent],
  imports: [
    CommonModule,
    FilterPillsRoutingModule
  ]
})
export class FilterPillsModule { }
