import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterPillsComponent } from './filter-pills.component';

const routes: Routes = [{ path: '', component: FilterPillsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterPillsRoutingModule { }
