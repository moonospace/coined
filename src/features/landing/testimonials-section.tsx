function TestimonialItem() {
  return (
    <div className="flex cursor-pointer flex-col rounded-xl border border-border border-dashed bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5">
      <p className="text-pretty md:p-3">
        " Coined really nailed the design & development, works perfectly.
        Everything work seamlessly and the design looks sick, fast delivery,
        seamless communications. Just amazing work. "
      </p>

      <div className="mt-5 flex items-center justify-between border-border border-t border-dashed pt-4">
        <div className="flex items-center gap-2">
          <img
            alt="Nyoman Sunima"
            className="h-6 w-6 overflow-hidden rounded-full object-cover"
            src="https://pbs.twimg.com/profile_images/1918961916556509184/7mQkBVgb_400x400.jpg"
          />
          <span className="text-sm">Nyoman Sunima</span>
        </div>

        <a
          className="trtransition-all text-sm duration-300 hover:-translate-y-0.5"
          href="https://moono.site"
          rel="noopener"
          target="_blank"
        >
          Moono
        </a>
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
