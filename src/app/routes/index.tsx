import {
  HeroSection,
  TestimonialsSection,
  WorksSection,
} from "@features/landing";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title: "The Businesses Growth Partner | Coined",
      description:
        "We help small business, startups, and professional grow, scale & win the game",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-16">
      <HeroSection />
      <TestimonialsSection />
      <WorksSection />
    </div>
  );
}
