# NgrxDataAot

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Reproduction Steps

`git clone https://github.com/bchiatt/ngrx-data-aot-repro.git && cd ngrx-data-aot-repro`

`npm install`

`ng serve --aot`

Note the following output in terminal:

```text
ERROR in ./src/app/app.module.ngfactory.js
Module not found: Error: Can't resolve 'ngrx-data/utils/index' in '/Users/eastfive/Code/ngrx-data-aot-repro/src/app'
```

## The Setup
```
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
    { provide: Pluralizer, useValue: NoopPluralizer }, // <-- Remove this line and AOT works
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
