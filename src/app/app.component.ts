 import { Component } from '@angular/core';
 import {Observable} from "rxjs/Observable";
 import {Observer} from "rxjs/Observer";
 import {observeOn} from "rxjs/operator/observeOn";
 import {ModalService} from "./modal/modal.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public _modalService: ModalService;

  public newTime = new Observable<string>(( observer : Observer<string>) =>{
    setInterval( () => observer.next( new Date().toString() ),1000 )
  });

  public dadata:boolean = true;

  public data = {
    flag: false,
    title:'',
    name:'',
    dataForm:[],
    dataFormExample:['qwe1','qwe','ert','tyu']
  };

  public getexampleData(){
    this.changeFlag();
    return this.data.dataFormExample;
  };

  public resert(){

    console.log('resert');

    this.data = {
      flag: false,
      title:'',
      name:'',
      dataForm:[],
      dataFormExample:['одни','два','три','четырее']
    }
  }

  public changeFlag(){
    this.data.flag = !this.data.flag;
  };

  public sentData(data){
    console.log(data);
    this.changeFlag();
  }

  public example(flag){
    let data =[
      {
        flag: true,
        num: 12,
        name: "dssdf",
        title: 'sdfsd',
        age: 123
      },
      {
        flag: true,
        num: 0,
        name: "000dssdf",
        title: 'd',
        age: 1233333
      },
      {
        flag: true,
        num: 111112,
        name: "dsdddddsdf",
        title: 'sdfsddddd',
        age: 11113
      },
      {
        flag: true,
        num: 2222220,
        name: "dsswwwdf",
        title: 'swwwwdfsd',
        age: 100023
      }
    ];
    this._modalService.getData(data[flag]);
  }
  constructor( _modalService: ModalService  ){
    this._modalService = _modalService;
  }

}


