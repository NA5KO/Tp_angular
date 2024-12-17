import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../../Model/cv';
@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.css']
})
export class CvItemComponent {
  @Input() cv!: Cv;
  @Output() selectedCv = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    console.log('cv', this.cv);
  }
  selectCv(): void {
    this.selectedCv.emit(this.cv);
  }
}