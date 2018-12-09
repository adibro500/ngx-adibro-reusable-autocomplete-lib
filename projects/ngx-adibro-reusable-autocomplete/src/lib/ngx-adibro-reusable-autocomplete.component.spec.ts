import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAdibroReusableAutocompleteComponent } from './ngx-adibro-reusable-autocomplete.component';

describe('NgxAdibroReusableAutocompleteComponent', () => {
  let component: NgxAdibroReusableAutocompleteComponent;
  let fixture: ComponentFixture<NgxAdibroReusableAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAdibroReusableAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAdibroReusableAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
