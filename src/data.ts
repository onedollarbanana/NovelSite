export interface Book {
  id: string;
  title: string;
  description: string;
}

export const books: Book[] = [
  { id: '1', title: 'Sample Book One', description: 'First sample book.' },
  { id: '2', title: 'Sample Book Two', description: 'Second sample book.' },
];
