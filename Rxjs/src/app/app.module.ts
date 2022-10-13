import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCustomObservableComponent } from './component/new-custom-observable/new-custom-observable.component';
import { FunctionObservableComponent } from './component/function-observable/function-observable.component';
import { UnsubscribeObservableComponent } from './component/unsubscribe-observable/unsubscribe-observable.component';
import { OperatorBasicComponent } from './component/operator-basic/operator-basic.component';
import { OperatorComponent } from './operator/operator.component';
import { BufferOperatorComponent } from './operator/buffer-operator/buffer-operator.component';
import { BufferCountComponent } from './operator/buffer-count/buffer-count.component';
import { TakeOperatorComponent } from './operator/take-operator/take-operator.component';
import { DistinctOperatorComponent } from './operator/distinct-operator/distinct-operator.component';
import { DistinctUntillChanillChangedComponent } from './operator/distinct-untill-chanill-changed/distinct-untill-chanill-changed.component';
import { AuditComponent } from './operator/audit/audit.component';
import { FirstComponent } from './operator/first/first.component';
import { DebounceComponent } from './operator/debounce/debounce.component';
import { ElementAtComponent } from './operator/element-at/element-at.component';
import { SingleComponent } from './operator/single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCustomObservableComponent,
    FunctionObservableComponent,
    UnsubscribeObservableComponent,
    OperatorBasicComponent,
    OperatorComponent,
    BufferOperatorComponent,
    BufferCountComponent,
    TakeOperatorComponent,
    DistinctOperatorComponent,
    DistinctUntillChanillChangedComponent,
    AuditComponent,
    FirstComponent,
    DebounceComponent,
    ElementAtComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
