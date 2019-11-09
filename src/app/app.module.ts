import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TerminalInputComponent } from './terminal-input/terminal-input.component';
import { TerminalLineComponent } from './terminal-line/terminal-line.component';
import { TerminalAutocompleteComponent } from './terminal-autocomplete/terminal-autocomplete.component';
import { TerminalSuggestionComponent } from './terminal-suggestion/terminal-suggestion.component';

@NgModule({
  declarations: [
    AppComponent,
    TerminalInputComponent,
    TerminalLineComponent,
    TerminalAutocompleteComponent,
    TerminalSuggestionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
