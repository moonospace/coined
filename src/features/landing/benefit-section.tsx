const benefits: string[] = [
  "Unlimited & flexible scaling",
  "Pause or cancel anytime",
  "Rapid & reliable delivery",
  "Satisfaction guaranteed",
  "Senior expert level",
  "Seamless integrations",
  "No cost surprises",
  "Result based performance",
];

function BenefitItem({ benefit }: { benefit: string }) {
  return (
    <li className="group hover:-translate-y-1 flex cursor-pointer items-center gap-2 text-foreground/60 transition-all duration-300 hover:text-foreground">
      <i className="fi fi-sc-check-circle text-foreground/40 transition-all duration-300 group-hover:scale-95 group-hover:text-foreground" />
      {benefit}
    </li>
  );
}

export function BenefitSection() {
  return (
    <section className="flex flex-col items-center py-28" id="mission">
      <h2 className="mt-10 text-center font-medium tablet:text-5xl text-3xl leading-tight tracking-tight">
        Big deals
        <br />
        no bloated costs
      </h2>

      <p className="mt-10 laptop:w-8/12 tablet:w-9/12 text-pretty text-center text-foreground/60 leading-relaxed">
        We could bore you with a long list of perks,
        <br />
        but here are the key takeaways:
      </p>

      <div className="mt-16 flex w-full justify-center">
        <ul className="flex flex-col gap-5">
          {benefits.map((benefit, index) => (
            <BenefitItem benefit={benefit} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
