import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { DataInputComponent, LogDirective  } from './data-input/data-input.component';
import { SimplePipePipe } from './pipes/simple-pipe.pipe';
import { RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

import { ModalComponent } from './serv/modal.component';
import { ModalService } from './modal/modal.service';

import { TempComponentComponent } from './temp-component/temp-component.component';
import { Testtest1Component } from './testtest1/testtest1.component';
import { Testtest2Component } from './testtest2/testtest2.component';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { AlertComponent } from './alert/alert.component';


// import our necessary module and components here
import { DiffMatchPatchModule, DiffDirective } from '../../node_modules/ng-diff-match-patch/index';



const routes = [
{
    path:'Page1' ,
    component: Page1Component,
    children: [
      {
        path:'one',
        component: OneComponent,
      },
      {
        path:'two',
        component: TwoComponent,
      }
    ]
  },
  {
    path:'2/:id',
    component: Page2Component,
    data:[{
      isProde:true
    }]
  },
  {
    path:'**',
    component: PageErrorComponent
  }
];


@NgModule({
  declarations: [
    LogDirective,
    AppComponent,
    InputComponent,
    DataInputComponent,
    SimplePipePipe,
    Page1Component,
    Page2Component,
    ModalComponent,
    PageErrorComponent,
    OneComponent,
    TwoComponent,
    TempComponentComponent,
    Testtest1Component,
    Testtest2Component,
    AlertComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BootstrapModalModule,
    DiffMatchPatchModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ModalService],
  entryComponents: [AlertComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
