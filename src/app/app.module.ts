import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    TwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
