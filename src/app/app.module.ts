import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgrxDataModule, Pluralizer } from 'ngrx-data';
import { HttpClientModule } from '@angular/common/http';


@Injectable()
export class NoopPluralizer implements Pluralizer {
  pluralize(name: string) {
    return name;
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    NgrxDataModule.forRoot({})
  ],
  providers: [
    { provide: Pluralizer, useValue: NoopPluralizer },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
