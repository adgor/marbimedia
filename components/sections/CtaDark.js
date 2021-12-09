import React from "react";
import { CtaItem } from "./CtaItem";

export const CtaDark = () => {
  return (
    <CtaItem
      btnLink="#contact"
      bgStyle="bg-brand-gunmetal"
      textStyle="text-brand-charcoal"
      ctaTitleFirst="Customers are looking for you online."
      ctaTitleSecond="We’ll help them find you."
      ctaDesc="MarbiMedia is a digital agency built around passion and results.
      We help ambitious business of small and medium sizes to generate
      more revenue and growth."
    />
  );
};
