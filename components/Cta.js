import React from "react";
import Btn from "../components/Btn";

export const Cta = () => {
  return (
    <section className=" bg-brand-cultured">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex items-center justify-between">
          <div className="space-y-5 ">
            <h2 className="text-2xl font-semibold leading-9 text-brand-gunmetal sm:text-3xl">
              Customers are looking for you online.
              <br />
              We’ll help them find you.
            </h2>
            <p className="max-w-md text-base leading-6 text-brand-charcoal">
              MarbiMedia is a digital agency built around passion and results.
              We help ambitious business of small and medium sizes to generate
              more revenue and growth.
            </p>
          </div>
          <Btn
            link="#services"
            classStyle="bg-brand-culturedDark text-brand-charcoal"
            text="see our services"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 duration-700 ease-in-out transform text-brand-jonquil group-hover:translate-y-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Btn>
        </div>
      </div>
    </section>
  );
};
