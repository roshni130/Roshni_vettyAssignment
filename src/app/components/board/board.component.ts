import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import this
import { ListComponent } from '../list/list.component'; // ✅ Import ListComponent

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  standalone: true,
  imports: [CommonModule, ListComponent]
// ✅ Add CommonModule & ListComponent
})
export class BoardComponent {
  lists: { id: string; title: string; cards: any[] }[] = [];

  addList(): void {
    const title = prompt('Enter List Name');
    if (title) {
      this.lists.push({ id: Date.now().toString(), title, cards: [] });
    }
  }

  deleteList(id: string): void {
    this.lists = this.lists.filter(list => list.id !== id);
  }
}
