import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BuyComponent } from './buy/buy.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductSearchComponent
  }
];



@NgModule({
  declarations: [
    HomeComponent,
    ProductSearchComponent,
    ProductDetailComponent,
    BuyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})



export class HomeModule { }
