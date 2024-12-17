import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './ColorChange/color/color.component';
import { CvComponent } from './CVTech/cv/cv.component';
import { CarteVisiteComponent } from './Ex2/carte-visite/carte-visite.component';
import { MiniwordComponent } from './Ex6/miniword/miniword.component';
import { AuthFormComponent } from './Forms/auth-form/auth-form.component';
import { ParentComponent } from './Ex3/parent/parent.component';
import { DetailsPageComponent } from './CVTech/details-page/details-page.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';

const routes: Routes = [
  { path: 'cv/:id', component: DetailsPageComponent },
  { path: 'CvTech', component: CvComponent },
  { path: 'color', component: ColorComponent },
  { path: 'Ex2', component: CarteVisiteComponent },
  { path: 'Ex6', component: MiniwordComponent },
  { path: 'Forms', component: AuthFormComponent },
  {path: 'Ex3' , component: ParentComponent},
  {path : 'Carousel', component : ImageCarouselComponent},
  { path: '', redirectTo: '/CvTech', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/CvTech' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
