import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

 @Input()
 public value:string;

 @Output()
 public myCoursorEvent:EventEmitter<string> = new EventEmitter();

 public emit(ev:MouseEvent){
  let el = ev.target as HTMLElement;
  this.myCoursorEvent.emit(ev.value);
 }

}
