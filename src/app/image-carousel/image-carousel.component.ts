import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent {
  private images: string[] = [
    'assets/images/rotating_card_profile2.png',
    'assets/images/rotating_card_profile.png',
    'assets/images/rotating_card_profile3.png',
    'assets/images/Amine.jpg',
  ];
  private intervalTime: number = 2000; 
  private size: string = '400px'; 

  currentImage$: Observable<string> | undefined; 

  ngOnInit(): void {
    this.currentImage$ = interval(this.intervalTime).pipe(
      map(index => this.images[index % this.images.length]) 
    );
  }
}