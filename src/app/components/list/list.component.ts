import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component'; // ✅ Import CardComponent

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: true,
  imports: [CommonModule, CardComponent] 
})
export class ListComponent {
  @Input() list!: { id: string; title: string; cards: any[] };
  @Output() deleteListEvent = new EventEmitter<string>();

  deleteList(): void {
    this.deleteListEvent.emit(this.list.id);
  }

  
  addCard(): void {
    const title = prompt('Enter Card Title');
    if (title) {
      this.list.cards.push({
        id: Date.now().toString(),
        title,
        description: 'New card description',
        createdAt: new Date(),
      });
    }
  }

  deleteCard(cardId: string): void {
    this.list.cards = this.list.cards.filter(card => card.id !== cardId);
  }
}
