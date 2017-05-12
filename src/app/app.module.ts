import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoadingMaskComponent } from './loading-mask/loading-mask.component';
import {NgSpinKitModule} from 'ng-spin-kit';

@NgModule({
  declarations: [
    AppComponent,
    LoadingMaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgSpinKitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
