import {
  BenefitSection,
  CTASection,
  HeroSection,
  PlanSection,
  ProcessSection,
  ServiceSection,
} from "@features/landing";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title: "Your Business Growth & Success Partner | Coined",
      description:
        "We help small business, startups, and professional grow, scale & win the game",
    }),
  }),
  component: PageComponent,
});

function PageComponent() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <BenefitSection />
      <ProcessSection />
      <ServiceSection />
      <PlanSection />
      <CTASection />
    </div>
  );
}
