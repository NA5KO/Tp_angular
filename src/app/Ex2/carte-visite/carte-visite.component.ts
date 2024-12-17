import { Component } from '@angular/core';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent {
  cardData = {
    name: 'Ben Salah',
    firstName: 'Ahmed',
    job: ' Développeur Web',
    photo: 'https://www.w3schools.com/howto/img_avatar.png',
    quote: '“I think design would be better if designers were much more skeptical about its applications. If you believe in the potency of your craft, where you choose to dole it out is not something to take lightly.”',
    description: 'Développeur Web Full Stack, je suis passionné par les nouvelles technologies et les défis techniques. Je suis spécialisé dans le développement d\'applications web et mobiles. Je suis également,',
    keywords: 'Html css javascript angular nodejs ionic',
  };
}
