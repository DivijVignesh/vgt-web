import Image from "next/image";
import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative" id= "hero">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              VGTech: Advanced AI Solutions for <br className="max-lg:hidden" />
              Defense, Healthcare &amp; Custom Software
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Creating tailored artificial intelligence and custom software solutions across industries to solve complex business challenges.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Learn More{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Dashboard */}
          <div
            className="mx-auto max-w-4xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative rounded-2xl bg-white p-6 shadow-2xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
              {/* Dashboard Header */}
              <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-sm font-medium text-gray-600">
                    VGTech AI Solutions Portfolio
                  </span>
                </div>
                <div className="text-xs text-gray-500">
                  Multi-Domain AI Performance
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Custom AI Solutions */}
                <div className="rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 p-4">
                  <h3 className="text-sm font-semibold text-orange-800 mb-2">
                    Custom AI Development
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Solution Accuracy</span>
                      <span className="font-medium text-orange-600">Highest levels</span>
                    </div>
                    <div className="h-2 bg-orange-200 rounded-full">
                      <div className="h-2 bg-orange-600 rounded-full w-full"></div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Dozens of bespoke models crafted
                    </div>
                  </div>
                </div>

                {/* Enterprise Solutions */}
                <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-4">
                  <h3 className="text-sm font-semibold text-blue-800 mb-2">
                    Enterprise AI Systems
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Process Efficiency</span>
                      <span className="font-medium text-blue-600">Exceptional gains</span>
                    </div>
                    <div className="h-2 bg-blue-200 rounded-full">
                      <div className="h-2 bg-blue-600 rounded-full w-full"></div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Seamless cross-industry integration
                    </div>
                  </div>
                </div>

                {/* Specialized Domains */}
                <div className="rounded-lg bg-gradient-to-br from-green-50 to-green-100 p-4">
                  <h3 className="text-sm font-semibold text-green-800 mb-2">
                    Domain-Specific AI
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Client Satisfaction</span>
                      <span className="font-medium text-green-600">Outstanding</span>
                    </div>
                    <div className="h-2 bg-green-200 rounded-full">
                      <div className="h-2 bg-green-600 rounded-full w-full"></div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Applied across healthcare, finance, and security
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Industries */}
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800">
                    Healthcare Focus
                  </div>
                  <div className="text-xs text-gray-600">Bespoke AI solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800">
                    Defense & Security
                  </div>
                  <div className="text-xs text-gray-600">Advanced analytics</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800">
                    Enterprise Scale
                  </div>
                  <div className="text-xs text-gray-600">Robust integrations</div>
                </div>
              </div>

              {/* Status Indicators */}
              <div className="mt-6 flex items-center justify-center space-x-6 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-gray-600">Active Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-600">Multi-Domain Expertise</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  <span className="text-gray-600">Custom Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
