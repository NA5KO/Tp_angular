import { Injectable } from '@angular/core';
import { Cv } from './Model/cv';
@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[];
  constructor() {
    this.cvs = [
      new Cv(1, 'Amine', 'Yahya', 22, 'assets/images/Amine.jpg', 123456, 'ybi3 kaki'),
      new Cv(2, 'Amen', 'dhouibi', 20, 'assets/images/rotating_card_profile2.png', 654321, 'm3alem'),
      new Cv(
        3,
        'Aziz',
        'Boukhcham',
        25,
        "",345678,'Ingenieur en informatique'
      ),
    ];
  }
  getCvs(): Cv[] {
    return this.cvs;
  }
  getCvById(id: number): Cv | undefined {
    const cv = this.cvs.find((cv) => {
      return cv.id == id;
    });
    return cv;
  }
  deleteCv(id: number): void {
    const index = this.cvs.findIndex((cv) => cv.id === id);
    if (index >= 0) {
      this.cvs.splice(index, 1);
    }
  }
}
