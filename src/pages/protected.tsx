import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { getServerSession } from "next-auth";
import { getReworkAuthSession } from "../lib/getServerSession";
import { authOptions } from "../server/auth";

interface PageProps {
  session: any, 
  isAuthed: any,
}

const Login: NextPage<PageProps> = ({ session, isAuthed }) => {

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