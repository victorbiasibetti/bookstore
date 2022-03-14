import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import Cookies from "universal-cookie";

import { IBooks } from "../../interfaces/books";
import request from "../../services/request";

const cookies = new Cookies();

const Books: React.ElementType = ({ books }: { books: Array<IBooks> }) => {
  const router = useRouter();

  const [listBooks, setListBooks] = useState<Array<IBooks>>(books);
  const [bookResearch, setBookResearch] = useState<string>("");

  const handleRentBook = useCallback(
    async (id: number) => {
      const access_token = cookies.get("access_token");

      try {
        await request.patch(`/books/${id}`, {
          rentedBy: access_token,
        });

        let bookIdx = listBooks.findIndex((b) => b.id === id);
        if (bookIdx) {
          let bookRented = listBooks[bookIdx];
          bookRented.rentedBy = access_token;
          setListBooks([
            ...listBooks.slice(0, bookIdx),
            bookRented,
            ...listBooks.slice(bookIdx + 1),
          ]);
        }
      } catch (e) {}
    },
    [listBooks]
  );

  const handleReturnBook = async (id: number) => {
    try {
      const { status } = await request.patch(`/books/${id}`, {
        rentedBy: null,
      });

      let bookIdx = listBooks.findIndex((b) => b.id === id);
      if (bookIdx) {
        let bookRented = listBooks[bookIdx];
        bookRented.rentedBy = null;
        setListBooks([
          ...listBooks.slice(0, bookIdx),
          bookRented,
          ...listBooks.slice(bookIdx + 1),
        ]);
      }
    } catch (e) {}
  };

  const handleDeleteBook = async (id: number) => {
    try {
      await request.delete(`/books/${id}`);

      let bookIdx = listBooks?.findIndex((b) => b.id === id) || -1;
      if (bookIdx > -1) {
        setListBooks([
          ...listBooks.slice(0, bookIdx),
          ...listBooks.slice(bookIdx + 1),
        ]);
      }
    } catch (e) {}
  };

  const handleEditBook = async (id: number) => {
    router.push(`/books/${id}`);
  };

  return (
    <div>
      Books
      <div>
        <button onClick={() => router.push("/books/new")}>Add Book</button>
      </div>
      <div>
        <input
          placeholder="Search a book"
          value={bookResearch}
          onChange={(e) => setBookResearch(e.target.value)}
        />
      </div>
      {listBooks &&
        listBooks
          .filter(
            (book) =>
              book.title.includes(bookResearch) ||
              book.id.toString().includes(bookResearch)
          )
          .map((book) => (
            <div key={book.id}>
              {book.id} - {book.title} -
              {book.rentedBy ? (
                book.rentedBy == cookies.get("access_token") ? (
                  <button onClick={() => handleReturnBook(book.id)}>
                    Return Book
                  </button>
                ) : (
                  "Book rented"
                )
              ) : (
                <button onClick={() => handleRentBook(book.id)}>Rent</button>
              )}
              {!book.rentedBy && (
                <button onClick={() => handleDeleteBook(book.id)}>
                  Delete
                </button>
              )}
              {!book.rentedBy && (
                <button onClick={() => handleEditBook(book.id)}>Edit</button>
              )}
            </div>
          ))}
    </div>
  );
};

export default Books;
