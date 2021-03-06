import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './home/details/details.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'details/:name', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
