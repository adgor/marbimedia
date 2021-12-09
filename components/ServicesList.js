import React from "react";
import { Service } from "./Service";
import { WebApps } from "./assets/WebApps";
import { Design } from "./assets/Design";
import { ProjectIdea } from "./assets/ProjectIdea";

export const ServicesList = ({}) => {
  return (
    <section id="services">
      {/* Web-Apps */}
      <Service
        serviceText="WEBSITES & WEB APPS"
        serviceTitleFirst="We build JAMstack"
        serviceTitleSecond="experiences."
        serviceDesc="We use JAMstack architecture, which is the modern way to build Websites and Apps that delivers better performance, security, and scaling."
        btnColorStyle="bg-brand-cultured text-brand-charcoal"
        btnLink="/services/web"
        order="order-last ml-20"
      >
        <WebApps />
      </Service>

      {/* Design */}
      <Service
        bgStyle="bg-brand-cultured"
        serviceText="UX & UI DESIGN"
        serviceTitleFirst="Design is"
        serviceTitleSecond="how it works."
        serviceDesc="We provide the smart design, backed by the right technology, as the basis for the most impressive user experiences."
        btnColorStyle="bg-brand-culturedDark text-brand-charcoal"
        btnLink="/services/design"
        left=" ml-20"
      >
        <Design />
      </Service>

      {/* project-ideas */}
      <Service
        serviceText="PROJECT IDEA"
        serviceTitleFirst="Plan, build, and manage"
        serviceTitleSecond="your project."
        serviceDesc="Cloud is an opportunity to reimagine everything with infinite potential. We help organizations confidently discover what’s possible."
        btnColorStyle="bg-brand-cultured text-brand-charcoal"
        btnLink="/services/project-idea"
        order="order-last ml-20"
      >
        <ProjectIdea />
      </Service>
    </section>
  );
};
