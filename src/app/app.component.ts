 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: '<h1>hhhhhhh2131</h1>',
   templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private title:string = 'app works';

  private newName = {
    name: 'имя',
    name2: 'bvz2'
  };

  private dadata:boolean = true;

  private dadata2(ev:MouseEvent ){
    console.log(ev);
    this.dadata = !this.dadata;
  };

  private title2():string {
    return "!!!!!"
  };
}
