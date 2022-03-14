import React from "react";
import { IBooks } from "../../interfaces/books";
import request from "../../services/request";

// import { Container } from './styles';

const NewBook: React.ElementType = ({ book }: { book: IBooks }) => {
  const handleAddBook = async () => {
    const response = await request.patch(`/books`, {
      title: "teste",
      rentedBy: null,
    });
    console.log("response", response);
  };

  console.log("book", book);
  return (
    <div>
      Detail book {book.id} - {book.title}
    </div>
  );
};

export default NewBook;
