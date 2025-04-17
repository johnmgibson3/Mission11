import { Book } from '../types/Book';

const BASE_URL = 'https://mission13john-dtb2fxbmbcgub6dg.centralus-01.azurewebsites.net/api/Book';

export const addBook = async (book: Book) => {
  const res = await fetch(`${BASE_URL}/Add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
    credentials: 'include',
  });
  return res.json();
};

export const updateBook = async (id: number, book: Book) => {
  const res = await fetch(`${BASE_URL}/Update/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
    credentials: 'include',
  });
  return res.json();
};

export const deleteBook = async (id: number) => {
  await fetch(`${BASE_URL}/Delete/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });
};
