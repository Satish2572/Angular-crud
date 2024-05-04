import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { StudentCreateComponent } from './pages/student-create/student-create.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { StudentEditComponent } from './pages/student-edit/student-edit.component';

const routes: Routes = [
  {path: '', component:HomePageComponent, title: 'Home Page'},
  {path: 'about-us', component: AboutPageComponent, title: 'About Us'},
  {path: 'contact-us', component: ContactPageComponent, title: 'Contact Us'},
  {path: 'student-create', component: StudentCreateComponent, title: 'Students Lists'},
  {path: 'students', component: StudentPageComponent, title: 'Students'},
  {path: 'student-edit/:id', component: StudentEditComponent, title: 'Students'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
