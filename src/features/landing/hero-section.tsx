import { Button } from "@shared/components";
import type * as React from "react";

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center py-28" id="hero">
      <span className="flex items-center gap-2 rounded-2xl bg-green-100 px-4 py-1.5 text-green-600 text-sm">
        <i className="fi fi-sc-heart" /> Loved by 100+ top businesses
      </span>
      <h2 className="mt-10 text-center font-medium tablet:text-5xl text-3xl leading-tight tracking-tight">
        Your business
        <br /> growth partner
      </h2>

      <p className="mt-10 laptop:w-8/12 tablet:w-9/12 text-pretty text-center text-foreground/60 leading-relaxed">
        Get more leads, sales, buyers & customers. We give you solutions to
        kickstart and grow your business
      </p>

      <div className="mt-16 flex tablet:flex-row flex-col items-center gap-4">
        <Button
          asChild
          className="hover:-translate-y-1 transition-all duration-300 hover:scale-95"
          size={"md"}
          variant={"primary"}
        >
          <a
            href={"https://cal.com/nyomansunima/sonibble-intro-call"}
            rel="noopener"
            target="_blank"
          >
            Book a call
            <i className="fi fi-sc-check-circle" />
          </a>
        </Button>
      </div>
    </section>
  );
}
