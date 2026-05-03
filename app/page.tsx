export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Section 174 · Developer Tax Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Overpaying on Your{' '}
          <span className="text-[#58a6ff]">Dev Income</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Section 174 forces you to amortize R&amp;D expenses over 5 years instead of deducting them immediately. Our calculator shows exactly how much that costs you — and how to minimize it.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Saving — $39/mo
        </a>
        <p className="text-xs text-[#484f58] mt-3">Cancel anytime. Instant access.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { title: 'Impact Calculator', desc: 'Enter your income and expenses — see your exact Section 174 tax hit.' },
          { title: 'Deduction Optimizer', desc: 'Identify which expenses qualify and how to time them for maximum benefit.' },
          { title: 'Year-over-Year Tracker', desc: 'Track amortization schedules across tax years in one dashboard.' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$39</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              'Section 174 impact calculator',
              'Deduction optimization engine',
              'Multi-year amortization tracker',
              'Export reports as PDF/CSV',
              'Priority email support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What is Section 174 and why does it matter for developers?',
              a: 'Section 174 of the US tax code now requires software development costs to be amortized over 5 years (15 for foreign work) instead of being fully deducted in the year incurred. This significantly increases taxable income for freelance devs and consultants.'
            },
            {
              q: 'Who is this tool for?',
              a: 'Freelance developers, independent software consultants, and accountants who work with dev clients. If you write code for income, Section 174 likely affects your tax bill.'
            },
            {
              q: 'Do I need an accountant to use this?',
              a: 'No. The tool is designed for developers — plain language, no tax jargon. That said, we always recommend reviewing results with a CPA before filing.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} Tax Deduction Tracker for Devs. Not legal or tax advice.
      </footer>
    </main>
  )
}
