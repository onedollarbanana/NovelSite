import Link from 'next/link';
import { books } from '../data';

export default function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Books</h1>
      <ul className="space-y-2">
        {books.map((book) => (
          <li key={book.id} className="border p-2 rounded bg-white">
            <Link href={`/books/${book.id}`}
              className="text-blue-600 hover:underline">
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
