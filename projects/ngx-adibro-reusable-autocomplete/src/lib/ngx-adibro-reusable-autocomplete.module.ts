import { NgModule } from '@angular/core';
import { NgxAdibroReusableAutocompleteComponent } from './ngx-adibro-reusable-autocomplete.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgxAdibroReusableAutocompleteComponent],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  exports: [NgxAdibroReusableAutocompleteComponent]
})
export class NgxAdibroReusableAutocompleteModule { }
