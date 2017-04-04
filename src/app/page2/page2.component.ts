import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  private _activatedRoute: ActivatedRoute;
  constructor( _activatedRoute: ActivatedRoute ){

    this._activatedRoute = _activatedRoute;
    console.log( 'this._activatedRoute ');
    console.log( this._activatedRoute );
    console.log( this._activatedRoute.params );

    this._activatedRoute.params.subscribe((id)=>{
      console.log('id')
      console.log(id);
    });
    this._activatedRoute.data.subscribe((data)=>{
      console.log('data')
      console.log(data);
    });

  };


  ngOnInit() {
  }

}
