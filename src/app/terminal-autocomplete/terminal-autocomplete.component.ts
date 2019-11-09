import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SuggestionEngineService } from '../suggestion-engine.service';

@Component({
  selector: 'app-terminal-autocomplete',
  templateUrl: './terminal-autocomplete.component.html',
  styleUrls: ['./terminal-autocomplete.component.scss']
})
export class TerminalAutocompleteComponent implements OnInit {

  @Output('saveLine') onSaveLine = new EventEmitter();
  suggestion: string = '';

  constructor(private suggestionSvc: SuggestionEngineService) { }

  ngOnInit() {
  }

  saveLine(line: string){
    this.onSaveLine.emit(line);
    this.suggestion = '';
  }

  onLineChanged(line: string){
    this.suggestion = this.getTopSuggestion(line);
  }

  getTopSuggestion(line: string): string{
    if(line === ''){
      return '';
    }
    return this.suggestionSvc.suggest(line);
  }

}
