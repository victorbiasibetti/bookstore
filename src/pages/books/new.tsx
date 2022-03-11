import { GetServerSideProps } from "next";
import React from "react";
import { NewBook } from "../../modules/books";

const NewBooksPage: React.FC = () => {
  return <NewBook />;
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

  return { props: {} };
};

export default NewBooksPage;
