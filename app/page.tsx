import Link from "next/link";

const programs = [
  {
    title: "Circuit Lab",
    slug: "spark-lab",
    age: "Ages 4-6",
    price: "$24/mo",
    description: "Light up first STEM wins with snap circuits, magnets, sensors, and guided science play.",
    accent: "from-[#fbbf24] to-[#f97316]",
  },
  {
    title: "Rover Builders",
    slug: "rocket-builders",
    age: "Ages 7-9",
    price: "$29/mo",
    description: "Build rolling robots, launchers, bridges, and test rigs while learning real engineering habits.",
    accent: "from-[#2563eb] to-[#06b6d4]",
  },
  {
    title: "AI & Robotics Studio",
    slug: "future-makers",
    age: "Ages 10+",
    price: "$34/mo",
    description: "Explore robotics, simple code logic, machine-thinking games, and advanced design missions.",
    accent: "from-[#7c3aed] to-[#14b8a6]",
  },
];

const values = [
  {
    title: "Real robotics thinking",
    text: "Kids learn how machines sense, move, fail, and improve through approachable robot builds and challenge cards.",
  },
  {
    title: "Science you can test",
    text: "Every box turns physics, chemistry, circuits, and biology into experiments kids can measure and repeat.",
  },
  {
    title: "Engineer, revise, retry",
    text: "Projects are built around the design loop: ask a better question, prototype, test, tweak, and try again.",
  },
];

const highlights = [
  "Robotics, circuits, chemistry, and physics missions",
  "No-screen builds with optional code-thinking extensions",
  "Monthly lab themes with real engineering vocabulary",
  "Parent field guide with hypotheses, prompts, and safety notes",
];

const labMetrics = [
  { value: "18+", label: "monthly experiments" },
  { value: "3", label: "robotics skill tracks" },
  { value: "0", label: "required screens" },
];

const scienceTracks = [
  "Robot motion and simple machines",
  "Circuits, sensors, and signals",
  "Kitchen chemistry and material science",
  "Space, rockets, force, and flight",
];

const labCrew = [
  {
    name: "Zip Volt",
    role: "Speed physics scout",
    symbol: "ZV",
    type: "speedster",
    color: "from-cyan-300 to-blue-500",
    description:
      "A lightning-fast robot who teaches motion, friction, acceleration, and the science of going faster safely.",
  },
  {
    name: "Rivet Rex",
    role: "Builder engineer",
    symbol: "RR",
    type: "builder",
    color: "from-amber-300 to-orange-500",
    description:
      "A cheerful construction bot who helps kids plan, measure, prototype, and fix wobbly inventions.",
  },
  {
    name: "Nimbus Nine",
    role: "Care-tech companion",
    symbol: "N9",
    type: "companion",
    color: "from-sky-200 to-teal-400",
    description:
      "A soft-spoken helper robot who explores sensors, health science, empathy, and human-centered design.",
  },
  {
    name: "Cosmo Kit",
    role: "Space lab navigator",
    symbol: "CK",
    type: "space",
    color: "from-violet-400 to-fuchsia-500",
    description:
      "A mission-ready explorer who brings rockets, rover logic, astronomy, and planet science into every lab.",
  },
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
      <section className="hero-video-shell relative isolate min-h-[760px] overflow-hidden bg-slate-950 text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-55"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1600&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/853870/853870-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(15,23,42,0.92)_0%,_rgba(15,23,42,0.72)_45%,_rgba(15,23,42,0.35)_100%)]" />
        <div className="parallax-grid absolute inset-0 opacity-30" />
        <div className="parallax-orbit parallax-slow left-[8%] top-[18%]" />
        <div className="parallax-orbit parallax-fast bottom-[14%] right-[9%]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:min-h-[760px] lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-200/40 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100 backdrop-blur">
              Robotics, circuits, chemistry, and engineering for kids
            </span>
            <h1 className="max-w-2xl text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
              Build bold little scientists and robot makers.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
              Defiant STEM delivers hands-on robotics and science kits that help kids wire circuits, test hypotheses, build moving machines, and think like engineers.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3.5 text-base font-black text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                Explore robot kits
              </Link>
              <Link
                href="/#reviews"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                See lab results
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
              {labMetrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <div className="text-3xl font-black text-cyan-200">{metric.value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="parallax-card parallax-medium relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-slate-950/80 p-5">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                  <span>Mission deck</span>
                  <span>Week 01</span>
                </div>
                <div className="mt-6 rounded-2xl bg-cyan-300/15 p-5">
                  <div className="text-4xl font-black text-white">Rover Rescue</div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Wire a motor circuit, tune wheel traction, and guide a rover across a simulated Mars canyon.
                  </p>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-200">
                  <div className="rounded-2xl bg-white/10 p-4">Sensors</div>
                  <div className="rounded-2xl bg-white/10 p-4">Motors</div>
                  <div className="rounded-2xl bg-white/10 p-4">Hypothesis</div>
                  <div className="rounded-2xl bg-white/10 p-4">Prototype</div>
                </div>
              </div>
            </div>
            <div className="parallax-card parallax-fast absolute -bottom-8 left-0 hidden rounded-3xl border border-white/15 bg-white/10 p-5 text-white shadow-xl backdrop-blur md:block">
              <div className="text-xs uppercase tracking-[0.2em] text-cyan-200">Lab mode</div>
              <div className="mt-2 text-2xl font-black">Test. Tweak. Try again.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-6 text-center text-sm font-medium text-slate-600 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
          <div>Build circuits, robots, rockets, and science rigs</div>
          <div>Age-based engineering challenges for growing kids</div>
          <div>Hands-on family labs with real STEM vocabulary</div>
          <div>Fresh robotics and science missions every month</div>
        </div>
      </section>

      <section id="benefits" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#8a4d0d]">Why families choose Defiant STEM</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">
            Robotics and science without the intimidating parts.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dff7ff] text-2xl">⚙</div>
              <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="parallax-lab relative overflow-hidden py-24 text-white">
        <div className="absolute inset-0 bg-slate-950/72" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">Inside the monthly lab</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] sm:text-5xl">
              Kids meet robotics through science they can touch.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Every mission starts with a question, introduces a real STEM concept, then asks kids to build a working model that proves or challenges their idea.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {scienceTracks.map((track) => (
              <div key={track} className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                <div className="mb-5 h-2 w-16 rounded-full bg-cyan-300" />
                <h3 className="text-xl font-black">{track}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(34,211,238,0.16),_transparent_28%),radial-gradient(circle_at_82%_12%,_rgba(251,191,36,0.18),_transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#8a4d0d]">Meet the Defiant Lab Crew</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">
              Original STEM heroes kids can root for.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Each kit features playful mascot guides with comic-style missions, build challenges, and science prompts that make robotics feel like an adventure.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {labCrew.map((character) => (
              <article
                key={character.name}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-[#fffaf2] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`character-stage relative flex h-64 items-end justify-center overflow-hidden bg-gradient-to-br ${character.color}`}>
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.18)_25%,_transparent_25%,_transparent_50%,_rgba(255,255,255,0.18)_50%,_rgba(255,255,255,0.18)_75%,_transparent_75%)] bg-[length:32px_32px] opacity-30" />
                  <div className={`cartoon-hero cartoon-hero-${character.type}`} aria-hidden="true">
                    <div className="cartoon-antenna" />
                    <div className="cartoon-ear cartoon-ear-left" />
                    <div className="cartoon-ear cartoon-ear-right" />
                    <div className="cartoon-head">
                      <div className="cartoon-faceplate">
                        <span className="cartoon-eye" />
                        <span className="cartoon-eye" />
                        <span className="cartoon-smile" />
                      </div>
                    </div>
                    <div className="cartoon-body">
                      <div className="cartoon-badge">{character.symbol}</div>
                      <div className="cartoon-panel" />
                    </div>
                    <div className="cartoon-arm cartoon-arm-left" />
                    <div className="cartoon-arm cartoon-arm-right" />
                    <div className="cartoon-leg cartoon-leg-left" />
                    <div className="cartoon-leg cartoon-leg-right" />
                    <div className="cartoon-prop" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{character.role}</p>
                  <h3 className="mt-2 text-2xl font-black text-slate-900">{character.name}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{character.description}</p>
                </div>
              </article>
            ))}
          </div>
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
            <Link href="/#faq" className="text-sm font-semibold text-slate-700 underline-offset-4 hover:underline">
              Need help choosing? See the FAQ
            </Link>
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
                  <Link
                    href={`/product/${program.slug}`}
                    className="mt-6 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    View details
                  </Link>
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
            <Link href="/shop" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-slate-900 transition hover:bg-slate-100">
              Start a subscription
            </Link>
            <Link href="/#programs" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/5">
              View programs
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
