import { Component } from '@angular/core';
import { Cv } from '../../Model/cv';
import { CvService } from '../../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  cvs: Cv[] = [];
  selectedCv!: Cv;
  constructor(private cvService: CvService) {}
  ngOnInit(): void {
    this.cvs = this.cvService.getCvs();
    console.log('CvComponent Initialized', this.cvs);
  }
  selectCv(cv: Cv): void {
    this.selectedCv = cv;
  }
}
