import React from "react";
import { Vercel } from "./assets/Vercel";
import { Strapi } from "./assets/Strapi";
import { Azure } from "./assets/Azure";
import { Youtube } from "./assets/Youtube";

export const TrustedLogos = () => {
  return (
    <div className="px-4 py-16 mx-auto border-t border-brand-quickSilver sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-2xl mb-6 text-2xl font-semibold leading-9 text-brand-gunmetal sm:text-3xl md:mx-auto">
          Trusted by these fine companies and many more
        </h2>
      </div>
      <div className="relative w-full overflow-hidden ">
        <div className="relative flex flex-row justify-between h-full py-10 ">
          <Vercel />
          <Strapi />
          <Azure />
          <Youtube />
        </div>
      </div>
    </div>
  );
};
