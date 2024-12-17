import { Injectable } from '@angular/core';
import { Cv } from './Model/cv';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private cvs: Cv[];
  constructor(private toastr: ToastrService) {
    this.cvs = [];
  }


  getEmbachees(): Cv[] {
    return this.cvs;
  }

  embaucher(cv: Cv): void {
    const index = this.cvs.indexOf(cv);
    if (index < 0) {
      this.cvs.push(cv);
      this.toastr.success(`Employee ${cv.name} ${cv.firstname} successfully hired!`, 'Hiring Success');
    } else {
      this.toastr.error(`Employee ${cv.name} ${cv.firstname} is already hired.`, 'CV Selection');
    }
  }

  debaucher(cv: Cv): void {
    const index = this.cvs.indexOf(cv);
    if (index >= 0) {
      this.cvs.splice(index, 1);
      this.toastr.success(`Employee ${cv.name} ${cv.firstname} successfully removed!`, 'Remove Success');
    }
  }
}
