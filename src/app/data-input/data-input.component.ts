import {Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})
export class DataInputComponent{

  private newData1:string = "..." ;
  private newData2:string = "привт" ;



  private sentData(){
    console.log('sentData')
  }

  @Input()
    public data:string;


}
