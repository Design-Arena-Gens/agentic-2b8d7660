import Link from 'next/link';

const features = [
  {
    title: 'Fast Iteration',
    description: 'Leverage Vercel deployments to validate ideas quickly and ship confidently.'
  },
  {
    title: 'Modern Stack',
    description: 'Built with Next.js App Router, React Server Components, and type-safe tooling.'
  },
  {
    title: 'Ready to Extend',
    description: 'Clean, modular structure makes it easy to grow this demo into a production app.'
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex max-w-4xl flex-col gap-16 px-6 py-24 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Live Test
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Test Deployment Blueprint
          </h1>
          <p className="max-w-xl text-lg text-slate-300 sm:text-xl">
            This lightweight starter demonstrates a production-ready baseline. Extend the UI, plug
            in your APIs, and deploy to Vercel with confidence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#features"
              className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Explore Features
            </Link>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-400 hover:text-slate-50"
            >
              Next.js Docs
            </a>
          </div>
        </div>
        <div className="flex-1 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-[0_0_60px_-30px_rgba(16,185,129,0.8)]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                Deployment Checklist
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>✓ Install dependencies</li>
                <li>✓ Build and lint</li>
                <li>✓ Ship with `vercel deploy`</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                Environment
              </p>
              <p className="mt-4 text-3xl font-bold text-slate-100">agentic-2b8d7660</p>
              <p className="mt-2 text-sm text-slate-400">
                Ready for fully automated testing and deployment flows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">Why this starter works</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Use this foundation to experiment with styling, data fetching, or edge functions. It is minimal yet expressive.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-[0_15px_40px_-25px_rgba(16,185,129,0.65)]"
              >
                <h3 className="text-lg font-semibold text-emerald-400">{feature.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950/80">
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-4 px-6 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Agentic Demo</span>
          <span>Deployed via Vercel automation pipeline</span>
        </div>
      </footer>
    </main>
  );
}
