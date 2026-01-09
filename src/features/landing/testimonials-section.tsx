function TestimonialItem() {
  return (
    <div className="flex flex-col rounded-xl border border-border border-dashed bg-surface p-3">
      <p className="text-pretty md:p-3">
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        veritatis similique magnam dolorem nesciunt necessitatibus deserunt
        totam repellat ducimus amet"
      </p>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-medium text-sm">John Doe</span>
          <span className="text-foreground/60 text-xs">CEO, Company</span>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="flex flex-col">
      <h2 className="font-medium text-xl tracking-tight">Testimonials.</h2>
      <div className="mt-6 flex">
        <TestimonialItem />
      </div>
    </section>
  );
}
