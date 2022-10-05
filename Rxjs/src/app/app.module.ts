import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCustomObservableComponent } from './component/new-custom-observable/new-custom-observable.component';
import { FunctionObservableComponent } from './component/function-observable/function-observable.component';
import { UnsubscribeObservableComponent } from './component/unsubscribe-observable/unsubscribe-observable.component';
import { OperatorBasicComponent } from './component/operator-basic/operator-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCustomObservableComponent,
    FunctionObservableComponent,
    UnsubscribeObservableComponent,
    OperatorBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
