import { TestBed } from '@angular/core/testing';

import { SuggestionEngineService } from './suggestion-engine.service';

describe('SuggestionEngineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuggestionEngineService = TestBed.get(SuggestionEngineService);
    expect(service).toBeTruthy();
  });
  
});
