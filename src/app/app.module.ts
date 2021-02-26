import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TxNativeModule, TranslationService } from '@transifex/angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TxNativeModule
  ],
  providers: [
    TranslationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
