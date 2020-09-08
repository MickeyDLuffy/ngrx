import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {  path: 'customers',
     loadChildren: '../app/customers/customers.module#CustomerModule',
    component: HomeComponent
  },
  { path: 'filter-pills',
    loadChildren: () => import('./filter-pills/filter-pills.module').then(m => m.FilterPillsModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
