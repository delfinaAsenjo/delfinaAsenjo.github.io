import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'category/:id', component: CategoryComponent},
  // {path: 'contact', component: ContactComponent,},
  {path: 'about-me', component:AboutMeComponent,},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
