import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TxNativeModule } from '@transifex/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    TxNativeModule.forRoot(),
  ],
  providers: [,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
