import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-terminal-line',
  templateUrl: './terminal-line.component.html',
  styleUrls: ['./terminal-line.component.scss']
})
export class TerminalLineComponent implements OnInit {

  @Input('line') line: string;
  constructor() { }

  ngOnInit() {
  }
  

}
