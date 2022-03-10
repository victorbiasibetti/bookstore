import { GetServerSideProps } from "next";
import React from "react";
import Books from "../../modules/books";
// import { Container } from './styles';

const BooksPage: React.FC = () => {
  return <Books />;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const access_token = req?.cookies?.access_token || null;
  if (!access_token)
    return {
      redirect: {
        permanent: false,
        destination: "/?exit=1",
      },
    };

  return { props: {} };
};

export default BooksPage;
