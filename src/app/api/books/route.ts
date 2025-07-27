import { NextResponse } from 'next/server';
import { books } from '../../../data';

export const GET = () => {
  return NextResponse.json(books);
};
