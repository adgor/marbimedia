import Head from "next/head";
import { CtaLight } from "../components/sections/CtaLight";
import { Hero } from "../components/Hero";
import { ServicesList } from "../components/ServicesList";
import { TrustedLogos } from "../components/TrustedLogos";
import { CtaDark } from "../components/sections/CtaDark";

import Button from "../components/Button.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>MarbiMedia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button textColor="white" bgColor="brand-purple">
        Enable
      </Button>
      <Hero />
      <CtaLight />
      <ServicesList />
      <TrustedLogos />
      <CtaDark />
    </>
  );
}
