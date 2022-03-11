import { GetServerSideProps } from "next";
import React from "react";
import { NewBook } from "../../modules/books";
import request from "../../services/request";

const BooksPage: React.FC = () => {
  return <NewBook />;
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
    const response = await request.get(`/books?id=${id}`);
    book = response;
  } catch (e) {}

  return { props: { book } };
};

export default BooksPage;
