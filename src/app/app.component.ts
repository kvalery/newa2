 import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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

}


