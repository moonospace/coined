interface Work {
  image: string;
  title: string;
}

interface WorksSectionProps {
  work: Work;
}

const works: Work[] = [
  {
    image:
      "https://cdn.dribbble.com/userupload/46255328/file/3e6af72e054c746804de402920517778.webp?resize=2048x1536&vertical=center",
    title: "Work 1",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/46206031/file/afdb862a3e00a37b47be8de23faeb150.png?resize=2048x1536&vertical=center",
    title: "Work 2",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/46255328/file/3e6af72e054c746804de402920517778.webp?resize=2048x1536&vertical=center",
    title: "Work 3",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/46255328/file/3e6af72e054c746804de402920517778.webp?resize=2048x1536&vertical=center",
    title: "Work 4",
  },
];

function WorkItem({ work }: WorksSectionProps) {
  return (
    <div className="flex cursor-pointer rounded-xl border border-border border-dashed bg-surface p-1">
      <img
        alt={work.title}
        className="h-52 w-full overflow-hidden rounded-lg object-cover md:h-96"
        src={work.image}
      />
    </div>
  );
}

export function WorksSection() {
  return (
    <section className="flex flex-col">
      <h2 className="font-medium text-xl tracking-tight">Works.</h2>
      <div className="mt-6 flex flex-col gap-10">
        {works.map((work, index) => (
          <WorkItem key={index} work={work} />
        ))}
      </div>
    </section>
  );
}
