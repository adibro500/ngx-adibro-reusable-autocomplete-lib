import { Component, OnInit, forwardRef, Input, ViewChild, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-adibro-reusable-autocomplete',
  template: `
  <input
  type="text"
  [(value)]="value"
  [placeholder]="placeholder"
  (change)="filterItems($event.target.value)"
  (keyup)="filterItems($event.target.value)"
  (focus)="filterItems($event.target.value)"
  #inputElement
/>
<div class="float-div" *ngIf="show && cacheItems">
  <ul
    class="remove-bullets mainmenu"
    *ngFor="let item of cacheItems; let idx = index"
  >
    <li class="hover-style" [style.width]='el.nativeElement.offsetWidth+"px"' (click)="selectValue(idx)">
      <a>{{ item }}</a>
    </li>
  </ul>
</div>

  `,
  styleUrls: ['./style.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxAdibroReusableAutocompleteComponent),
      multi: true
    }
  ]
})
export class NgxAdibroReusableAutocompleteComponent implements OnInit {

  @Input()
  items = ["abcd", "bghvgjhv", "c", "d"];
  @Input()
  placeholder;
  cacheItems;
  show;
  modelVal: any;
  @ViewChild('inputElement')
  inputEl: ElementRef;
  @Input("value") _value = "";
  onChange: any = () => {};
  onTouched: any = () => {};
  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    this.value = value;
  }

  constructor(public el:ElementRef) {
    this.cacheItems = this.items;
  }

  ngOnInit() {}

  showPanel(bool) {
    this.show = bool;
  }

  filterItems($evt) {
    if ($evt.length <= 0) {
      this.show = false;
      this.cacheItems = this.items;
    } else {
      let that = this;
      this.cacheItems = this.items.filter(item => {
        if (item.toLowerCase().trim().indexOf($evt.toLowerCase().trim()) > -1) {
          that.show = true;
          return true;
        }
      });
    }
  }

  selectValue(idx) {
    this.value = this.cacheItems[idx];
    this.onChange(this.value);
    this.inputEl.nativeElement.value = this.value;
    this.show = false;
  }

}
