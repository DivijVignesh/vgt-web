export default function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Meet Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Founder 1 */}
          <div className="flex items-center space-x-6">
            <img src="/images/founder1.jpg" alt="Dr. A. Kumar" className="w-24 h-24 rounded-full object-cover" />
            <div>
              <h3 className="text-xl font-semibold">Dr. Ananya Kumar</h3>
              <p className="text-gray-600">Co-Founder & Chief AI Scientist</p>
              <p className="text-gray-700 mt-2">
                PhD in Machine Learning from IIT Bombay, 10+ years building AI for aerospace and defense.
              </p>
            </div>
          </div>
          {/* Founder 2 */}
          <div className="flex items-center space-x-6">
            <img src="/images/founder2.jpg" alt="Mr. R. Singh" className="w-24 h-24 rounded-full object-cover" />
            <div>
              <h3 className="text-xl font-semibold">Mr. Rajesh Singh</h3>
              <p className="text-gray-600">Co-Founder & CTO</p>
              <p className="text-gray-700 mt-2">
                Veteran software architect with 15 years in enterprise systems and healthcare informatics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
