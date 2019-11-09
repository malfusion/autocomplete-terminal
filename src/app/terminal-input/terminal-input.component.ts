import { Component, OnInit, EventEmitter, Output, ViewChild, AfterViewInit } from '@angular/core';
import { SuggestionEngineService } from '../suggestion-engine.service';

@Component({
  selector: 'app-terminal-input',
  templateUrl: './terminal-input.component.html',
  styleUrls: ['./terminal-input.component.scss']
})
export class TerminalInputComponent implements OnInit, AfterViewInit{

  @Output('saveLine') saveLine = new EventEmitter();
  @Output('onLineChanged') onLineChanged = new EventEmitter();
  @ViewChild('typedLine', {static: false}) typedLine;
  
  constructor(private suggestionSvc: SuggestionEngineService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.typedLine.nativeElement.focus();
  }

  ngOnEnter() {
    this.saveLine.emit()
  }

  checkKeypress(event){
    if(event.keyCode == 9){
      this.typedLine.nativeElement.value = this.suggestionSvc.suggest(this.typedLine.nativeElement.value)
      console.log(this.suggestionSvc.suggest(this.typedLine.nativeElement.value))
      event.preventDefault();
    }
    if(event.keyCode == 13){
      this.saveLine.emit(this.typedLine.nativeElement.value);
      this.typedLine.nativeElement.value = ''
    }
  }

  lineChanged(event){ 
    this.onLineChanged.emit(this.typedLine.nativeElement.value);
  }

}
