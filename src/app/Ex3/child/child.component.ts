import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  myfavirotecolor:string = "red";
  // @Input() color!: string; 
  @Output() colorChange = new EventEmitter<string>();
  change(value: string) {
    this.myfavirotecolor = value;
    this.colorChange.emit(this.myfavirotecolor);
  }
  
}
