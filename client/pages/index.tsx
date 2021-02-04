import Container from "@material-ui/core/Container";
import Head from "next/head";
import React from "react";
import Layout from "../components/shared/Layout/Layout";

export default function Home() {
  return (
    <div className="test">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <Container>
          <h1>welcome</h1>
        </Container>
      </Layout>
    </div>
  );
}
