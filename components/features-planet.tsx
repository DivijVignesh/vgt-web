import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagDefense from "@/public/images/planet-tag-01.png";
import PlanetTagHealthcare from "@/public/images/planet-tag-02.png";
import PlanetTagCustom from "@/public/images/planet-tag-03.png";
import PlanetTagSecurity from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
  return (
    <section id="impact" className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Global Impact Through AI Excellence
            </h2>
            <p className="mt-4 text-gray-400">
              VGTech’s AI and custom software solutions drive innovation across industries—from healthcare and finance to security and enterprise platforms.
            </p>
          </div>

          {/* Planet graphic */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--tw-gradient-stops))]">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Earth representing global reach"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Orbit overlay decoration"
                  />
                  {/* <div>
                    <Image
                      className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-90 transition-opacity duration-500"
                      src={PlanetTagDefense}
                      width={200}
                      height={50}
                      alt="Defense AI"
                    />
                    <Image
                      className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagHealthcare}
                      width={200}
                      height={50}
                      alt="Healthcare AI"
                    />
                    <Image
                      className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-70 transition-opacity duration-500"
                      src={PlanetTagCustom}
                      width={200}
                      height={50}
                      alt="Custom Solutions"
                    />
                    <Image
                      className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-90 transition-opacity duration-500"
                      src={PlanetTagSecurity}
                      width={200}
                      height={50}
                      alt="Security Standards"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <article className="relative p-6 bg-gray-800 rounded-xl">
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-white">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                </svg>
                <span>Accelerated Threat Analysis</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Our AI-driven analytics streamline security workflows to detect potential threats swiftly and accurately.
              </p>
            </article>
            <article className="relative p-6 bg-gray-800 rounded-xl">
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-white">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
                </svg>
                <span>Enhanced Medical Transcription</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Leveraging NLP and deep learning to convert clinical notes and recordings into accurate, ready-to-use medical documentation.
              </p>
            </article>
            <article className="relative p-6 bg-gray-800 rounded-xl">
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-white">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z" opacity=".3"/>
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
                </svg>
                <span>Optimized Enterprise Workflows</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Custom software modules integrate seamlessly with existing systems, automating processes and improving operational efficiency.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
