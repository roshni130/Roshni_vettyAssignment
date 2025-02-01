import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jira-board',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Import FormsModule here
  templateUrl: './jira-board.component.html',
  styleUrls: ['./jira-board.component.css']
})
export class JiraBoardComponent {
  lists: { title: string; cards: { title: string; description: string; timestamp: string }[] }[] = [];

  ngOnInit() {
    this.loadFromLocalStorage();
  }

  addList() {
    this.lists.push({ title: 'New List', cards: [] });
    this.saveToLocalStorage();
  }

  deleteList(index: number) {
    this.lists.splice(index, 1);
    this.saveToLocalStorage();
  }

  addCard(listIndex: number) {
    const title = prompt('Enter card title:');
    const description = prompt('Enter card description:');

    if (title && description) {
      this.lists[listIndex].cards.unshift({
        title,
        description,
        timestamp: new Date().toLocaleString()
      });
      this.saveToLocalStorage();
    }
  }

  deleteCard(listIndex: number, cardIndex: number) {
    this.lists[listIndex].cards.splice(cardIndex, 1);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('jiraBoard', JSON.stringify(this.lists));
  }

  loadFromLocalStorage() {
    const savedData = localStorage.getItem('jiraBoard');
    if (savedData) {
      this.lists = JSON.parse(savedData);
    }
  }
}
