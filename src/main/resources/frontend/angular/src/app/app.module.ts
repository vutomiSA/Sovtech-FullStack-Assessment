import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './providers/angular-material.module';
//import { ChartsModule, WavesModule } from 'angular-bootstrap-md'

import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './providers/api.service';

import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './home/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
	DetailsComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	FormsModule, ReactiveFormsModule,
	HttpClientModule,
	AngularMaterialModule,
	BrowserAnimationsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
