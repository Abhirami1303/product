import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

export const routes: Routes = [
   { path: '', component: HomeComponent},
   { path: 'contact', component: ContactComponent},
   { path: 'products', component: ProductComponent},
   { path: 'products/:id', component: ProductdetailsComponent},
   { path: '**', component: NotfoundComponent}
];

// * wild card -if nothing on list is there