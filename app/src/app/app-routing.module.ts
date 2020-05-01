import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { NotFoundComponent } from './views/notfound/notfound.component'


const routes: Routes = [
  { path: '',  component: HomeComponent },
  {path: '**', component:  NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
