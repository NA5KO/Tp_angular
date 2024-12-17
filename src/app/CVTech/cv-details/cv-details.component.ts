import { Component, Input } from '@angular/core';
import { Cv } from '../../Model/cv';
import { EmbaucheService } from '../../embauche.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv-details',
  templateUrl: './cv-details.component.html',
  styleUrls: ['./cv-details.component.css']
})
export class CvDetailsComponent {
  @Input() cv!: Cv;
  constructor(
    private embaucheService: EmbaucheService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  embaucher() {
    this.embaucheService.embaucher(this.cv);
  }
  moreInfo() {
    const link = ['cv', this.cv.id];
    console.log(link);
    this.router.navigate(link);

  }
}
