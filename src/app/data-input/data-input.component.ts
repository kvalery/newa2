import {Component, Directive, Input, Output, EventEmitter, ElementRef }from '@angular/core';

@Directive({
  selector: 'input[log-directive]',
  host: {
    '(input)': 'onInput($event)'
  }
})

export class LogDirective {

  private _elRef:ElementRef;

  constructor(_elRef:ElementRef){
    this._elRef = _elRef;
    console.log('this._elRef.nativeElement.clssName');
    console.log(this._elRef.nativeElement);

  }

  public onInput(ev:KeyboardEvent){
    let el = event.target as HTMLInputElement;

    // this.flag = !this.flag;

    if(el.className == "action"){
      el.className = ""
    }else {
      el.className = "action"
    }

  }
}


@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})
export class DataInputComponent{

  private newData = [];
  public flag = true;

  @Input()
   public data;

  public trackFn(){

    console.log('fff ');
  }


  @Output()
   public myCustomEvent = new EventEmitter();

  public emit( ev: MouseEvent){
    let el = ev.target as HTMLInputElement;
    this.myCustomEvent.emit(el.value);

  }

  public getData(){

    for(let i of this.data.dataFormExample ){
      this.newData.push(i);
    }

  }

  public sentData(){
    console.log(this.data)
    console.log(this.newData)
  }

}
