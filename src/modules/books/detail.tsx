import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IBooks } from "../../interfaces/books";
import request from "../../services/request";

// import { Container } from './styles';

const DetailBook: React.ElementType = ({ book }: { book: IBooks }) => {
  const router = useRouter();

  //prevent direct access
  useEffect(() => {
    if (book.rentedBy) router.push(`/books`);
  });

  const [title, setTitle] = useState<string>(book.title);
  const [details, setDetails] = useState<string>(book.details || "");

  const handleUpdateBook = async () => {
    try {
      await request.patch(`/books/${book.id}`, {
        title,
        details,
      });
      router.push(`/books`);
    } catch (e) {}
  };

  return (
    <div>
      Book Detail
      <div>
        <label>ID - {book.id}</label>

        <br />
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label>Details</label>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <br />
        <button onClick={handleUpdateBook}>Update</button>
        <button onClick={() => router.push(`/books`)}>Cancel</button>
      </div>
    </div>
  );
};

export default DetailBook;
