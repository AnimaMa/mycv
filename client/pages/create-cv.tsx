import { Container } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import { CvForm } from "../components/CvForm/CvForm";
import Layout from "../components/shared/Layout/Layout";
import { PageHeader } from "../components/shared/PageHeader/PageHeader";

export default function CreateCv() {
  return (
    <div className="test">
      <Layout>
        <PageHeader />
        <Container>
          <h1>Create your CV</h1>
          <CvForm />
        </Container>
      </Layout>
    </div>
  );
}
