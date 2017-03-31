import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { DataInputComponent, LogDirective  } from './data-input/data-input.component';
import { SimplePipePipe } from './pipes/simple-pipe.pipe';

@NgModule({
  declarations: [
    LogDirective,
    AppComponent,
    InputComponent,
    DataInputComponent,
    SimplePipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
