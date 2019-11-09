import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalSuggestionComponent } from './terminal-suggestion.component';

describe('TerminalSuggestionComponent', () => {
  let component: TerminalSuggestionComponent;
  let fixture: ComponentFixture<TerminalSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
