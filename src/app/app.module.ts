import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './CVTech/cv/cv.component';
import { CvItemComponent } from './CVTech/cv-item/cv-item.component';
import { CvListComponent } from './CVTech/cv-list/cv-list.component';
import { CvDetailsComponent } from './CVTech/cv-details/cv-details.component';
import { DefaultImagePipe } from './default-image.pipe';
import { EmbaucheComponent } from './CVTech/embauche/embauche.component';
import { ToastrModule   } from 'ngx-toastr';
import { MenuComponent } from './CVTech/menu/menu.component';
import { ColorComponent } from './ColorChange/color/color.component';
import { AuthFormComponent } from './Forms/auth-form/auth-form.component';
import { FormsModule } from '@angular/forms';
import { CarteVisiteComponent } from './Ex2/carte-visite/carte-visite.component';
import { MiniwordComponent } from './Ex6/miniword/miniword.component';
import { DetailsPageComponent } from './CVTech/details-page/details-page.component';
import { ParentComponent } from './Ex3/parent/parent.component';
import { ChildComponent } from './Ex3/child/child.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    CvItemComponent,
    CvListComponent,
    CvDetailsComponent,
    DefaultImagePipe,
    EmbaucheComponent,
    MenuComponent,
    ColorComponent,
    AuthFormComponent,
    CarteVisiteComponent,
    MiniwordComponent,
    DetailsPageComponent,
    ParentComponent,
    ChildComponent,
    ImageCarouselComponent,
  ],
  imports: [
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
