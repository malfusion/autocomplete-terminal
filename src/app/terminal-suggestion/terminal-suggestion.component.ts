import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-terminal-suggestion',
  templateUrl: './terminal-suggestion.component.html',
  styleUrls: ['./terminal-suggestion.component.scss']
})
export class TerminalSuggestionComponent implements OnInit {
  @Input('suggestion') suggestion: string;
  constructor() { }

  ngOnInit() {
    
  }

}
