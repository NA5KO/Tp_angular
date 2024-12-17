import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  Initialcolor:string = 'red';
  currentColor:string = this.Initialcolor;

  applyColor(newColor: string): void {
    this.currentColor = newColor;
  }

  resetColor(): void {
    this.currentColor = this.Initialcolor; 
  }
}
