import Container from "@material-ui/core/Container"
import Head from "next/head"
import React from "react"
import { Hero } from "../components/Home/Hero/Hero"
import Layout from "../components/shared/Layout/Layout"

export default function Home() {
  return (
    <div className="test">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"></meta>
        <meta property="og:title" content="Vytvor si svoje online resume." key="title" />
        <meta property="og:image" content="/img/logo.svg" />

        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </div>
  )
}
