import { GetServerSideProps } from "next";
import React from "react";
import { Books } from "../../modules/books";
import request from "../../services/request";
import { IBooks } from "../../interfaces/books";
// import { Container } from './styles';

const BooksPage: React.ReactNode = ({ books }: { books: Array<IBooks> }) => {
  return <Books books={books} />;
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const access_token = req?.cookies?.access_token;
  if (!access_token)
    return {
      redirect: {
        permanent: false,
        destination: "/?exit=1",
      },
    };

  const { data } = await request.get(`/books`);

  return { props: { books: data } };
};

export default BooksPage;
