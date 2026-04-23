import Timeline from "@/app/about/Timeline";
import CorePrinciples from "@/app/about/CorePrinciples";
import CTA from "@/app/about/CTA";
import VisionaryLeadership from "./VisionaryLeadership";

export default function AboutPage() {
  return (
    <div className="relative bg-[#f4f5f9] overflow-hidden">

      {/* GRADIENT BLOBS */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-orange-400 opacity-20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-[#2b1e70] opacity-10 rounded-full blur-[120px]" />

      {/* HERO */}
      <section className="py-20 md:py-32 px-6 relative z-10 max-w-7xl mx-auto">
        {/* LABEL */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-6 bg-orange-500 rounded-full" />
          <span className="text-xs font-black text-[#2b1e70] uppercase tracking-[3px]">
            ABOUT LARSUN LABS
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-[68px] font-black leading-[1.1] text-[#2b1e70] tracking-tight max-w-4xl">
          Rooted in Tamil Nadu. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
            Committed to Every Doctor We Serve.
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="mt-8 max-w-3xl text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
          Larsun Labs Pvt Ltd was founded with a straightforward belief: that doctors in Tamil Nadu deserve a pharmaceutical partner who understands the local healthcare environment, maintains consistent supply, and stands behind every product they promote.
        </p>
      </section>

      {/* OUR STORY SECTION */}
      <section className="py-20 md:py-32 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT: TITLE & TAG */}
          <div>
            <div className="inline-block bg-orange-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-[2px] uppercase mb-6">
              OUR STORY
            </div>
            <h2 className="text-3xl md:text-[48px] font-black text-[#2b1e70] leading-[1.1] tracking-tight">
              How We Started and <br />
              <span className="text-orange-500">Why It Matters.</span>
            </h2>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="space-y-8">
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              Larsun Labs was established in Tamil Nadu by professionals with deep roots in the Indian pharmaceutical industry. Having worked across medical sales, product management, and distribution — our founders understood a persistent gap: doctors needed pharma companies that were accessible, accountable, and consistent.
            </p>

            <div className="p-8 bg-gray-50 rounded-3xl border-l-4 border-orange-500 shadow-sm">
              <p className="text-gray-600 text-base leading-relaxed">
                We began with a focused portfolio in CAR+DIA — the two largest prescription burden areas in Tamil Nadu — and expanded steadily into Gynaecology, Critical Care, Neurology, and Respiratory. Today, we operate across 25+ districts in Tamil Nadu through a network of dedicated Medical Representatives, stockists, and distributors who share our values.
              </p>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed font-medium italic">
              "We are not the largest pharma company in India. But in the regions we operate, we are among the most trusted because we show up, we follow up, and we never compromise on product quality."
            </p>
          </div>
        </div>
      </section>

      <Timeline />
      <CorePrinciples />
      <VisionaryLeadership />

      <div className="bg-white">
        <CTA />
      </div>
    </div>
  );
}