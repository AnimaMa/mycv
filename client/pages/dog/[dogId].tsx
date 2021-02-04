import React from "react";
import { useRouter } from "next/router";
import { useDog } from "../../hooks/useDog";
import Layout from "../../components/shared/Layout/Layout";

export default function DogPage() {
  const router = useRouter();
  const { dogId } = router.query;
  const { data: dog, isLoading } = useDog(dogId as string);

  return (
    <div>
      <Layout>{isLoading ? <div>Loading</div> : <h1>Ahoj {dog?.data?.name}</h1>}</Layout>
    </div>
  );
}
