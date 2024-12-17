import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../../Model/cv';

@Component({
  selector: 'app-cv-liste',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css']
})
export class CvListComponent {
  @Input() cvs: Cv[] = [];
  @Output() selectedCv = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    console.log('ListeComponent Initialized', this.cvs);
  }
  selectCv(selectedCv: Cv): void {
    this.selectedCv.emit(selectedCv);
  }
}