import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalAutocompleteComponent } from './terminal-autocomplete.component';

describe('TerminalAutocompleteComponent', () => {
  let component: TerminalAutocompleteComponent;
  let fixture: ComponentFixture<TerminalAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
