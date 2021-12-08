import Head from "next/head";
import { Cta } from "../components/Cta";
import { Hero } from "../components/Hero";
import { ServicesList } from "../components/ServicesList";
export default function Home() {
  return (
    <>
      <Head>
        <title>MarbiMedia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Cta />
      <ServicesList />
    </>
  );
}
