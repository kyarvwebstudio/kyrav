'use client'

import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <article className="w-full bg-[#0d0d0d] text-white pt-36 pb-24 px-4 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors">
          <span>← Back to Home</span>
        </Link>

        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-amber-400 w-fit">
            LEGAL & COMPLIANCE
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white">
            Privacy Policy
          </h1>
          <p className="text-xs text-zinc-400 font-mono">
            Last Updated: July 2026 | KYRAV Web Studio
          </p>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col gap-10 text-zinc-300 text-sm md:text-base leading-relaxed">
          
          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-xl text-white">1. Introduction</h2>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
              At KYRAV (&quot;KYRAV Web Studio&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), accessible from kyrav.in, protecting your personal data and business confidentiality is one of our top priorities. This Privacy Policy outlines the types of information we collect, how it is processed, stored, and protected when you interact with our website, client portal, or custom web design and engineering services.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-xl text-white">2. Information We Collect</h2>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
              We collect information to provide better custom web design, engineering, AI integration, and digital strategy services to our clients:
            </p>
            <ul className="list-disc list-inside space-y-2 text-xs md:text-sm text-zinc-400 pl-2">
              <li><strong className="text-white">Personal Identifiers:</strong> Name, professional email address, phone number, and company name provided via project intake forms or contact forms.</li>
              <li><strong className="text-white">Technical & Usage Data:</strong> IP address, browser type, device information, operating system, and referral URLs analyzed for security and performance optimization.</li>
              <li><strong className="text-white">Project Assets & Communications:</strong> Design briefs, brand guidelines, content assets, and project feedback shared during active development workflows.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-xl text-white">3. How We Use Your Information</h2>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
              The information we collect is strictly used for legitimate business operations:
            </p>
            <ul className="list-disc list-inside space-y-2 text-xs md:text-sm text-zinc-400 pl-2">
              <li>Designing, building, and deploying custom web applications and client portfolios.</li>
              <li>Processing invoices, client portal access, and ongoing website annual maintenance (AMC).</li>
              <li>Responding to project inquiries, proposal requests, and technical support requests.</li>
              <li>Improving web app performance, Core Web Vitals, security, and search engine optimization (SEO).</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-xl text-white">4. Data Confidentiality & Non-Disclosure</h2>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
              We respect your intellectual property and proprietary business logic. KYRAV never sells, rents, or trades your personal or project data to third-party advertisers. All project briefs, proprietary client codebases, and credentials remain strictly confidential under mutual Non-Disclosure agreements (NDAs) where applicable.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-xl text-white">5. Cookies & Analytics</h2>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
              Our website uses minimal, privacy-centric cookies to remember your session state, client portal authentication, and to collect anonymous traffic analytics. You can adjust your browser settings to decline non-essential cookies at any time.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-xl text-white">6. Security Measures</h2>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
              We implement industry-standard encryption protocols (HTTPS/SSL), secure cloud infrastructure, role-based access control (RBAC), and automated vulnerability monitoring to safeguard your data against unauthorized access, loss, or alteration.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-xl text-white">7. Contact & Data Controller</h2>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
              If you have any questions regarding this Privacy Policy or wish to exercise your rights to access, update, or delete your personal data, please contact our privacy compliance team at:
            </p>
            <div className="p-4 bg-[#161616] rounded-xl border border-white/10 text-xs font-mono text-zinc-300 w-fit">
              <p>Email: <a href="mailto:kyravwebstudio@gmail.com" className="text-amber-400 underline">kyravwebstudio@gmail.com</a></p>
              <p>Phone: +91 88830 94601</p>
              <p>Studio: KYRAV Web Studio, Tamil Nadu, India</p>
            </div>
          </section>

        </div>

      </div>
    </article>
  )
}
