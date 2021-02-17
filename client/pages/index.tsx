import Container from "@material-ui/core/Container"
import Head from "next/head"
import React from "react"
import { Hero } from "../components/Home/Hero/Hero"
import Layout from "../components/shared/Layout/Layout"

export default function Home() {
  return (
    <div>
      <Head>
        <meta property="og:title" content="Vytvor si svoje online resume." key="title" />
        <meta property="og:image" content="/img/logo.svg" />
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </div>
  )
}
