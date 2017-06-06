 import { Component } from '@angular/core';
 import {Observable} from "rxjs/Observable";
 import {Observer} from "rxjs/Observer";
 import {observeOn} from "rxjs/operator/observeOn";
 import {ModalService} from "./modal/modal.service";
 import { DialogService } from "ng2-bootstrap-modal";
 import { AlertComponent } from './alert/alert.component';

 var fffffff = 'fffffff';
 declare var JsDiff: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public left = 'Перевести эту страницу A javascript text diff implementation. ... data. patch may be a string diff or the output from the parsePatch or structuredPatch methods. ... Basic example in Node.';
  public right = 'Перевести эту стр аницу A javascript text diff implementat sssion. ... data. patch may be a stsring diff or the output from th   Patch methods. ... Basic example in Node.';

  public _modalService: ModalService;

  public newTime = new Observable<string>(( observer : Observer<string>) =>{
    setInterval( () => observer.next( new Date().toString() ),1000 )
  });

  public componentName = 'app-testtest1';

  public componentNameChang (){

    if (this.componentName == 'app-testtest1' ){
      this.componentName = 'app-testtest2';
    } else {
      this.componentName = 'app-testtest1';
    }
  };

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

    if( typeof(flag) === 'string'){

      console.log(this)
      this._modalService.sentModule('sentModule');

    }else{
      this.promisTest();
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
  }


  constructor( private dialogService:DialogService ){

    var result = '';

    var one =   'beep b fgd 2fff';
    var other = 'beep bo cccc 2fff';

    var diff: any = JsDiff.diffWords(one, other);

    console.log(diff);

    for(let str of diff ){

      if ( !str.added && !str.removed ) result = result + '|' + str.value + '|'

      if ( str.added ) {
        result = result + '+';
        result = result + str.value;
        result = result + '+';
      }

      if ( str.removed ) {
        result = result + '-';
        result = result + str.value;
        result = result + '-';
      }

    }

    console.log(result)

  }

  public promisTest (){

    this.testTestPromis().then(
      (param) => {
        console.log('промис - да')
      })

      .catch(
        (param) =>{
          console.log('промис - нет')
       });
  }

  public testTestPromis(){
    return new Promise((resolve, reject)=>{
      if(confirm('даИльНет?')){
        resolve('ДАААААА')
      }else{
        reject('НЕТТТТТТ')
      }
    });
  }

  public showAlert (){

    this.dialogService.addDialog(AlertComponent, {title:'Alert title!', message:'Alert message!!!'});

  }

}


