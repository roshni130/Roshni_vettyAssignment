import { Component } from '@angular/core';
import { JiraBoardComponent } from './jira-board/jira-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JiraBoardComponent],
  template: `<app-jira-board></app-jira-board>`,
})
export class AppComponent {}
