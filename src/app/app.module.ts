import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SimplePlanChoicesComponent } from './simple-plan-choices/simple-plan-choices.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SimplePlanChoicesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
