import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { indigoDark, grayDark } from "@radix-ui/colors";
import Head from "next/head";
import { api } from "../utils/api";

import "../styles/globals.css";

import { MantineProvider } from "@mantine/core";
import { HeaderMegaMenu } from "../utils/components/Header";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
      <>
        <Head>
          <title>ReWork</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <HeaderMegaMenu />
          <MantineProvider>
            <SessionProvider session={session}>
              <Component {...pageProps} />
            </SessionProvider>
          </MantineProvider>
      </>
  );
};

export default api.withTRPC(MyApp);
