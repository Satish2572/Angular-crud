import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  {path: '', component:HomePageComponent, title: 'Home Page'},
  {path: 'about-us', component: AboutPageComponent, title: 'About Us'},
  {path: 'contact-us', component: ContactPageComponent, title: 'Contact Us'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
