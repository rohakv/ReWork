import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { getReworkAuthSession } from "../lib/getServerSession";

const Login: NextPage = () => {

    return (
        <>
            <h1>Welcome</h1>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    
    const session = await getReworkAuthSession(ctx);

    console.log("session: ", session);

    if (!session) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return {
      props: {
        session,
      },
    }
  }

export default Login;