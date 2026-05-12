export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Privacy Tool
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Check if your hardware enables{' '}
          <span className="text-[#58a6ff]">monopolistic tracking</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Scan your device&apos;s hardware attestation capabilities through browser APIs. Get a privacy risk score, understand what data can be collected, and receive actionable recommendations.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Start Privacy Scan — $19/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[['TPM Detection', 'Trusted Platform Module analysis'],['Key Attestation', 'Android & iOS key store checks'],['Risk Score', 'Actionable privacy rating']].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
          <div className="text-center mb-6">
            <div className="text-white font-bold text-xl mb-1">Pro</div>
            <div className="text-4xl font-bold text-white">$19<span className="text-lg text-[#8b949e] font-normal">/mo</span></div>
            <div className="text-[#8b949e] text-sm mt-1">Cancel anytime</div>
          </div>
          <ul className="space-y-3 mb-8">
            {['Full hardware attestation scan','TPM, SGX & TrustZone detection','Detailed privacy risk report','Enterprise device comparison','Monthly re-scan alerts','Priority support'].map(f => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            ['What is hardware attestation?', 'Hardware attestation is a process where a device cryptographically proves its hardware identity to a remote server. While useful for security, it can be used to uniquely identify and track devices across sessions, apps, and networks — even after factory resets.'],
            ['Which devices are affected?', 'Most modern Android devices (via Google Play Integrity API), iPhones (via DeviceCheck & App Attest), and Windows PCs with TPM 2.0 chips support some form of hardware attestation. Our tool detects which capabilities your specific device exposes.'],
            ['How does the privacy scan work?', 'We use browser APIs, user-agent analysis, and feature detection to identify attestation-capable hardware components on your device. No data is stored on our servers — the analysis runs client-side and you receive a privacy risk score with specific recommendations.']
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Hardware Attestation Privacy Checker. All rights reserved.
      </footer>
    </main>
  )
}
