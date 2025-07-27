import { books } from '../../../data';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

export default function BookPage({ params }: Props) {
  const book = books.find((b) => b.id === params.id);
  if (!book) {
    notFound();
  }
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{book?.title}</h1>
      <p>{book?.description}</p>
    </div>
  );
}
