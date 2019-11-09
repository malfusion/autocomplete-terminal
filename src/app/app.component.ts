import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SuggestionEngineService } from './suggestion-engine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('container', {static: false}) container;
  title = 'autocomplete';
  lines = [
    "man bash",
    "man fc",
    "man bash",
    "fc -l -10",
    "history",
    "ls -a",
    "vim .bash_history ",
    "history",
    "man history",
    "history 10",
    "history",
    "cd Pictures",
    "cd .",
    "cd Desktop",
    "cd /usr/bin",
    "c",
    "cd /etc",
    "cd resolvconf",
    "cd resolv.conf.d",
  ];
  
  constructor(private suggestionSvc: SuggestionEngineService){
    for(var line of this.lines){
      this.suggestionSvc.addWord(line);
    }
  }

  ngAfterViewInit(){
    this.scrollTerminalToBottom();
  }

  scrollTerminalToBottom(){
    this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight - this.container.nativeElement.clientHeight;
  }

  getAllLines(){
    return this.lines;
  }

  saveLine(line: string){
    this.lines.push(line);
    this.suggestionSvc.addWord(line);
    setTimeout(() => {
      this.scrollTerminalToBottom();
    });
  }

}
