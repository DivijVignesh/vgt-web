export default function TechStack() {
  return (
    <section id="how-it-works" className="relative before:absolute before:inset-0 before:h-60 before:pointer-events-none before:bg-gradient-to-b before:from-zinc-100 before:-z-10">
      <div className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6">
            Our Foundation
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From collaborative discovery through ongoing optimization, VGTech's four-phase approach ensures robust, scalable, and industry-specific AI and software systems tailored to diverse business requirements.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 bg-gradient-to-r from-white/80 via-white to-white/80 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">1. Discovery</h3>
            <p className="text-slate-600">
              Conduct comprehensive stakeholder workshops and business analysis to define objectives, technical requirements, and success metrics for custom AI and software projects across various industries.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-r from-white/80 via-white to-white/80 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">2. Prototype & Validate</h3>
            <p className="text-slate-600">
              Rapidly develop proof-of-concept solutions—including machine learning models, custom software modules, or automated systems—and validate against real-world business scenarios to ensure effectiveness and ROI.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-r from-white/80 via-white to-white/80 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">3. Scale & Integrate</h3>
            <p className="text-slate-600">
              Optimize solution performance with cloud infrastructure, implement secure API architectures, and integrate seamlessly with existing enterprise systems, ensuring minimal disruption to business operations.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-r from-white/80 via-white to-white/80 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">4. Support & Evolve</h3>
            <p className="text-slate-600">
              Provide ongoing technical support, performance monitoring, and iterative enhancements—leveraging user feedback and emerging technologies to keep solutions competitive and aligned with business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
