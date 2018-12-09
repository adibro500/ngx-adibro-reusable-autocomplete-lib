import { TestBed } from '@angular/core/testing';

import { NgxAdibroReusableAutocompleteService } from './ngx-adibro-reusable-autocomplete.service';

describe('NgxAdibroReusableAutocompleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAdibroReusableAutocompleteService = TestBed.get(NgxAdibroReusableAutocompleteService);
    expect(service).toBeTruthy();
  });
});
