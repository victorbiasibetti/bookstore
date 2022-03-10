import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface IQuery {
  exit: boolean;
}
interface IProps {
  access_token: string;
  query: IQuery;
}

const Home: NextPage<IProps> = ({ access_token, query }) => {
  const router = useRouter();

  useEffect(() => {
    if (query.exit) {
      router.push("/login");
      return;
    }

    if (access_token) {
      router.push("/books");
    } else {
      router.push("/login");
    }
  }, []);

  return <div></div>;
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const access_token = req?.cookies?.access_token || null;

  return { props: { access_token, query } };
};

export default Home;
