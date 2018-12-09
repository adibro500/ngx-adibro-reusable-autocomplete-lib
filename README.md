# ngx-adibro-autocomplete for Angular 7+

This is an angular component for autocomplete.

# For demos please visit

[demos](abhorrent-measure.surge.sh)

## Installation

```
npm install --save ngx-adibro-autocomplete
```

## Usage

### Inside app.module file import the module:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { NgxAdibroAutocompleteModule } from 'ngx-adibro-autocomplete';

@NgModule({
  declarations: [
      ...
  ],
  imports: [
    ... ,
    BrowserModule,
    FormsModule,
    NgxAdibroAutocompleteModule,
    ...
  ],
  providers: [ ... ],
  bootstrap: [...]
})
export class AppModule { }


```

### In your HTML file you can do:

```
<ngx-adibro-reusable-autocomplete
  [items]="items"
  [(ngModel)]="myval"
  (ngModelChange) = "changedVal($event)"
  placeholder="placeholder"
></ngx-adibro-reusable-autocomplete
>

```
### In your TS file:
```
myval: any;
  public items = [
        "Eve",
        "Charles",
        "Tracey",
            ...
    ]

  changedVal($event){
    console.log($event);

  }
```

### We support:
1. items must be an array of strings
2. currently only strings are supported

## That's it

Have fun !!!
