export interface Card {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}

  
  export interface List {
    id: string;
    title: string;
    cards: Card[];
  }
  