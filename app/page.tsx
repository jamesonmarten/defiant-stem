const programs = [
  {
    title: "Spark Lab",
    age: "Ages 4-6",
    price: "$24/mo",
    description: "Build confidence through sensory experiments, playful coding, and maker projects.",
    accent: "from-[#f7b267] to-[#f4845f]",
  },
  {
    title: "Rocket Builders",
    age: "Ages 7-9",
    price: "$29/mo",
    description: "Tackle engineering challenges, design prototypes, and test ideas with every box.",
    accent: "from-[#6a5cff] to-[#4cc9f0]",
  },
  {
    title: "Future Makers",
    age: "Ages 10+",
    price: "$34/mo",
    description: "Go deeper into robotics, science, and real-world problem solving with family projects.",
    accent: "from-[#14b8a6] to-[#2dd4bf]",
  },
];

const values = [
  {
    title: "Hands-on discovery",
    text: "Every kit turns big ideas into tangible experiments, builds, and creative problem-solving moments.",
  },
  {
    title: "Family-first learning",
    text: "Designed for parents and kids to explore together, making curiosity feel accessible and exciting.",
  },
  {
    title: "Confidence through play",
    text: "Kids learn by making, testing, and revising—building grit and joy in the process.",
  },
];

const highlights = [
  "STEM activities with clear learning goals",
  "No-screen, no-stress family projects",
  "Fresh kit themes every month",
  "Gift-ready boxes with step-by-step guides",
];

const testimonials = [
  {
    quote:
      "My daughter looked forward to her Defiant STEM box every month. It made science feel like an adventure instead of homework.",
    name: "Cassidy T.",
  },
  {
    quote:
      "We loved that the projects were challenging enough for my son but still approachable for us as parents. It sparked so much conversation.",
    name: "Marcus L.",
  },
  {
    quote:
      "Perfect balance of creativity and rigor. The kits gave our family a screen-free way to learn together every weekend.",
    name: "Arianna K.",
  },
];

const faqs = [
  {
    question: "What age groups do you serve?",
    answer:
      "Defiant STEM is designed for ages 4 through 12, with age-appropriate kits and activities that grow with your child.",
  },
  {
    question: "Are the kits beginner-friendly?",
    answer:
      "Yes. Each box includes clear instructions, simple setup steps, and family-friendly guidance so kids can explore confidently.",
  },
  {
    question: "Can I gift a subscription?",
    answer:
      "Absolutely. Defiant STEM subscriptions make excellent birthdays, holidays, and learning milestones for curious kids.",
  },
  {
    question: "How often do boxes ship?",
    answer:
      "Most families choose a monthly plan, with each box curated around a new challenge or learning theme.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-slate-900">
      <header className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0f172a] text-lg font-black text-white">
              D
            </div>
            <div>
              <div className="text-lg font-black tracking-tight">Defiant STEM</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">For curious kids</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#programs" className="transition hover:text-slate-900">Programs</a>
            <a href="#benefits" className="transition hover:text-slate-900">Why it works</a>
            <a href="#reviews" className="transition hover:text-slate-900">Reviews</a>
            <a href="#faq" className="transition hover:text-slate-900">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 sm:inline-flex hover:border-slate-400">
              Log in
            </button>
            <button className="rounded-full bg-[#0f172a] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-[#1e293b]">
              Start a subscription
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.15),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#fbbf24]/60 bg-[#fff7d6] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#9a5b00]">
              Hands-on learning for everyday bravery
            </span>
            <h1 className="max-w-xl text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl lg:text-7xl">
              Build fearless thinkers.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              Defiant STEM turns curiosity into confidence with educational kits that mix science, design, and play to help kids explore the world with purpose.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-full bg-[#0f172a] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:bg-[#1e293b]"
              >
                Explore kits
              </a>
              <a
                href="#reviews"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                See families love it
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Trusted by families</span>
              <span>•</span>
              <span>4.9/5 parent rating</span>
              <span>•</span>
              <span>30-day satisfaction guarantee</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-[#fbbf24]/60 blur-2xl" />
            <div className="absolute -right-6 bottom-8 h-24 w-24 rounded-full bg-[#7dd3fc]/60 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_20px_80px_rgba(15,23,42,0.12)]">
              <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80"
                  alt="Kids learning through hands-on STEM activity"
                  className="h-[520px] w-full object-cover"
                />
              </div>
              <div className="absolute left-8 top-8 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur-sm">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">New box</div>
                <div className="mt-2 text-2xl font-black text-slate-900">Flight Lab</div>
                <div className="mt-1 text-sm text-slate-600">Build, test, and launch</div>
              </div>
              <div className="absolute bottom-8 right-8 rounded-2xl bg-[#0f172a] p-4 text-white shadow-xl">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-300">Includes</div>
                <div className="mt-2 text-xl font-bold">4 projects</div>
                <div className="text-sm text-slate-300">+ parent guide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-6 text-center text-sm font-medium text-slate-600 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
          <div>STEM activities that make learning feel like play</div>
          <div>Age-based kits from early explorers to future engineers</div>
          <div>Designed for family time, not just solo screen time</div>
          <div>Fresh themes every month with no guesswork</div>
        </div>
      </section>

      <section id="benefits" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#8a4d0d]">Why families choose Defiant STEM</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">
            Learning that feels bold, joyful, and real.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fef3c7] text-2xl">✦</div>
              <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="programs" className="bg-[#f5efe7] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#8a4d0d]">Choose your adventure</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">
                Pick the right STEM path for your child.
              </h2>
            </div>
            <a href="#faq" className="text-sm font-semibold text-slate-700 underline-offset-4 hover:underline">
              Need help choosing? See the FAQ
            </a>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {programs.map((program) => (
              <article key={program.title} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className={`h-36 bg-gradient-to-r ${program.accent}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-700">
                      {program.age}
                    </span>
                    <span className="text-lg font-black text-slate-900">{program.price}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-black text-slate-900">{program.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{program.description}</p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-600">
                    {highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-[#f59e0b]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="mt-6 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    View details
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] bg-[#0f172a] p-8 text-white shadow-[0_25px_70px_rgba(15,23,42,0.18)]">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-200">How it works</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">
              Every month is a fresh challenge.
            </h2>
            <div className="mt-8 space-y-6">
              {[
                "Choose a program based on age and interests.",
                "Unbox a themed set of experiments, activities, and guides.",
                "Build, test, and celebrate wins as a family.",
              ].map((step, index) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 font-bold text-sky-200">
                    {index + 1}
                  </div>
                  <p className="text-base leading-7 text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80"
              alt="Family doing science project together"
              className="h-[500px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#8a4d0d]">Parents love it</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">
              Real stories from families who want more than worksheets.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-[1.75rem] border border-slate-200 bg-[#fffaf2] p-7 shadow-sm">
                <div className="mb-5 text-2xl text-[#f59e0b]">★★★★★</div>
                <p className="text-lg leading-8 text-slate-700">“{item.quote}”</p>
                <div className="mt-6 border-t border-slate-200 pt-4 text-sm font-semibold text-slate-900">{item.name}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#8a4d0d]">Questions</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
              <p className="mt-2 text-base leading-7 text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0f172a] py-20 text-white">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-200">Start exploring</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] sm:text-5xl">
            Ready to turn curiosity into confidence?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Give your child a monthly rhythm of discovery, building, and joyful problem-solving that lasts beyond the box.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-slate-900 transition hover:bg-slate-100">
              Start a subscription
            </a>
            <a href="#programs" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/5">
              View programs
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-600 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0f172a] text-sm font-black text-white">
              D
            </div>
            <span className="font-semibold text-slate-800">Defiant STEM</span>
          </div>
          <div className="flex flex-wrap gap-5">
            <a href="#programs" className="hover:text-slate-900">Programs</a>
            <a href="#benefits" className="hover:text-slate-900">Benefits</a>
            <a href="#reviews" className="hover:text-slate-900">Reviews</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </div>
          <div>© 2026 Defiant STEM</div>
        </div>
      </footer>
    </main>
  );
}
