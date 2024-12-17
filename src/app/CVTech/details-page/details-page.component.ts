import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from 'src/app/cv.service';
import { Cv } from 'src/app/Model/cv';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent {
  cv: Cv | undefined;
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cv = this.cvService.getCvById(params['id']);
    });
  }
  deleteCv(): void {
    if (this.cv) {
      this.cvService.deleteCv(this.cv.id);
      this.router.navigate(['/cv']);
    }
  }
}