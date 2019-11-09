import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalLineComponent } from './terminal-line.component';

describe('TerminalLineComponent', () => {
  let component: TerminalLineComponent;
  let fixture: ComponentFixture<TerminalLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
