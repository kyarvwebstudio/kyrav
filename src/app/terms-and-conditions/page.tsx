'use client'

import Link from 'next/link'

export default function TermsAndConditionsPage() {
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
            TERMS & AGREEMENTS
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white">
            Terms & Conditions
          </h1>
          <p className="text-xs text-zinc-400 font-mono">
            Last Updated: July 2026 | KYRAV Web Studio
          </p>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col gap-10 text-zinc-300 text-sm md:text-base leading-relaxed">
          
          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-xl text-white">1. Agreement to Terms</h2>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
              These Terms and Conditions constitute a legally binding agreement made between you (&quot;Client&quot;, &quot;you&quot;) and KYRAV Web Studio (&quot;KYRAV&quot;, &quot;we&quot;, &quot;us&quot;), concerning your access to and use of our web design, website redesign, annual maintenance (AMC), AI integration, performance, and SEO services. By engaging our studio or signing a project proposal, you agree to be bound by these Terms.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-xl text-white">2. Scope of Services</h2>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
              KYRAV agrees to render custom web engineering services as detailed in the official project proposal, statement of work (SOW), or invoice. Any additions, out-of-scope feature requests, or major design revisions requested after milestone sign-off will be quoted separately under a change request.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-xl text-white">3. Client Responsibilities & Content Supply</h2>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
              The Client agrees to provide necessary brand assets, copy, logos, images, API keys, and feedback in a timely manner. Delays in asset submission or feedback sign-off may extend estimated delivery schedules.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-xl text-white">4. Payment Terms & Invoicing</h2>
            <ul className="list-disc list-inside space-y-2 text-xs md:text-sm text-zinc-400 pl-2">
              <li><strong className="text-white">Deposit & Milestones:</strong> Projects typically require an upfront deposit prior to design commencement, with milestone payments linked to milestone sign-offs and final deployment.</li>
              <li><strong className="text-white">Annual Maintenance (AMC):</strong> Website AMC subscriptions are billed monthly or annually as agreed in the maintenance contract.</li>
              <li><strong className="text-white">Late Payments:</strong> Invoices unpaid beyond 15 business days may incur late interest fees or temporary suspension of ongoing deployment services.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-xl text-white">5. Intellectual Property Rights</h2>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
              Upon full settlement of all project invoices, the Client owns the final custom source code, artwork, and design deliverables produced for the project. KYRAV retains the right to display completed project screenshots, design concepts, and case studies in our official portfolio and marketing materials unless restricted by an explicit NDA.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-xl text-white">6. Warranties & Maintenance</h2>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
              KYRAV provides a 30-day post-launch warranty period to resolve any technical bugs or browser layout discrepancies directly attributable to our scope of work. Ongoing updates, security monitoring, and third-party API changes post-warranty are covered under our Annual Maintenance (AMC) agreements.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-xl text-white">7. Limitation of Liability</h2>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
              To the maximum extent permitted by law, KYRAV shall not be liable for indirect, incidental, or consequential damages resulting from third-party hosting outages, domain Registrar disruptions, external API service changes, or unauthorized third-party hacking beyond our reasonable control.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-xl text-white">8. Governing Law & Inquiries</h2>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India. For any questions regarding these Terms & Conditions, please contact us at:
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
