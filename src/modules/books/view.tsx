import React from "react";
import { useRouter } from "next/router";
import { IBooks } from "../../interfaces/books";

// import { Container } from './styles';

const DetailBook: React.ElementType = ({ book }: { book: IBooks }) => {
  const router = useRouter();

  return (
    <div>
      View Book
      <div>
        <label>ID - {book.id}</label>

        <br />
        <label>Title</label>
        <label> {book.title}</label>
        <br />
        <label>Details</label>
        <label> {book.details}</label>
        <br />
        <button onClick={() => router.push(`/books`)}>Back</button>
      </div>
    </div>
  );
};

export default DetailBook;
