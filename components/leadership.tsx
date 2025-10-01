export default function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
          Meet Our Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Managing Director */}
          <div className="flex items-center space-x-6">
            <img
              src="/images/founder1.jpg"
              alt="E Varalakshmi"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold">E Varalakshmi</h3>
              <p className="text-gray-600">Managing Director</p>
              <p className="text-gray-700 mt-2">
                The visionary behind VGTech’s founding, E Varalakshmi brings strategic insight and entrepreneurial drive to guide our company’s growth and mission.
              </p>
            </div>
          </div>
          {/* Director */}
          <div className="flex items-center space-x-6">
            <img
              src="/images/founder2.jpg"
              alt="E S V Satyanarayana"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold">E S V Satyanarayana</h3>
              <p className="text-gray-600">Director</p>
              <p className="text-gray-700 mt-2">
                A seasoned leader with extensive experience in organizational management, E S V Satyanarayana ensures our teams collaborate effectively and deliver exceptional client value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
