import { GetServerSideProps } from "next";
import React from "react";
import { Detail } from "../../modules/books";
import request from "../../services/request";
import { IBooks } from "../../interfaces/books";

const BooksPage: React.ReactNode = ({ book }: { book: IBooks }) => {
  return <Detail book={book} />;
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const access_token = req?.cookies?.access_token;
  const { id } = query;
  if (!access_token)
    return {
      redirect: {
        permanent: false,
        destination: "/?exit=1",
      },
    };

  let book = {};
  try {
    const { data }: { data: Array<IBooks> } = await request.get(
      `/books?id=${id}`
    );
    if (data.length) book = data[0];
  } catch (e) {
    console.log(e);
  }

  return { props: { book } };
};

export default BooksPage;
