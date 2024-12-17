import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-miniword',
  templateUrl: './miniword.component.html',
  styleUrls: ['./miniword.component.css']
})
export class MiniwordComponent {
  @Input() textColor: string = 'FFFFFF'; 
  @Input() fontSize: number = 20; 
  @Input() fontFamily: string = 'Georgia'; 
  fonts: string[] = [
    'Arial',
    'Courier New',
    'Georgia',
    'Times New Roman',
    'Verdana',
  ];
}
