import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../models';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule for date pipe

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [CommonModule] // ✅ Add this line
})
export class CardComponent {
  @Input() card!: Card;
  @Output() deleteCardEvent = new EventEmitter<string>();

  deleteCard(): void {
    this.deleteCardEvent.emit(this.card.id);
  }
}
