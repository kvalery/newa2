import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-error',
  templateUrl: './page-error.component.html',
  styleUrls: ['./page-error.component.css']
})
export class PageErrorComponent implements OnInit {

  private _router:Router;

  constructor(_router:Router){
    this._router = _router;
  }

  ngOnInit() {
  }

  public goTo(){
    this._router.navigate(['2']);
  }

}
