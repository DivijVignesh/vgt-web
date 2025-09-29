import Accordion from "./accordion"

export default function FAQ() {
  const items = [
    {
      title: 'What industries do you serve?',
      id: 'Defense organizations (DRDO, NSTL, Naval Dockyard), healthcare providers, and private enterprises.'
    },
    {
      title: 'How do you ensure data security?',
      id: 'Implement end-to-end encryption, adhere to ISO 27001 standards, and conduct regular audits.'
    },
    {
      title: 'Can you customize AI for proprietary data?',
      id: 'Yes—our in-house RAG pipelines and custom model training support proprietary datasets and on-premise deployments.'
    },
  ]
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-secondary mb-6 text-center">Frequently Asked Questions</h2>
        <Accordion title={items[0].title} id={items[0].id} />
      </div>
    </section>
  )
}
