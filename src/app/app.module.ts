import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewallproductComponent } from './viewallproduct/viewallproduct.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

const myroutes=[
  {path:"",component:AddproductComponent},
  {path:"view",component:ViewallproductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    NavbarComponent,
    ViewallproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
