import { useRouter } from "next/router";
import React, { useState } from "react";
import { IBooks } from "../../interfaces/books";
import request from "../../services/request";

// import { Container } from './styles';

const NewBook: React.ElementType = () => {
  const router = useRouter();

  const [title, setTitle] = useState<string>();

  const handleSaveBook = async () => {
    try {
      await request.post(`/books`, {
        title,
      });
      router.push(`/books`);
    } catch (e) {}
  };
  return (
    <div>
      New Book
      <div>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <button onClick={handleSaveBook}>Save</button>
      <button onClick={() => router.push(`/books`)}>Cancel</button>
    </div>
  );
};

export default NewBook;
