import { GetServerSideProps } from "next";
import React from "react";
import Login from "../modules/login";
// import { Container } from './styles';

const LoginPage: React.FC = () => {
  return <Login />;
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const access_token = req?.cookies?.access_token;

  if (access_token)
    return {
      redirect: {
        permanent: false,
        destination: "/books",
      },
    };

  return { props: {} };
};

export default LoginPage;
