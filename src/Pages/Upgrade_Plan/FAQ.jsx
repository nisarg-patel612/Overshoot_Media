import React, { useState } from "react";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      q: "What's different about hosting videos on Vimeo?",
      a: "Videos hosted on Vimeo can stream up to 4K Ultra HD so your viewers see your videos in the highest quality and unlike other platforms, we never put ads before, during, or after your videos — even on our Free plan.",
    },
    { q: "Will viewers see third-party ads on my videos?", a: "No, Vimeo does not place third-party ads on your content." },
    { q: "Can I cancel anytime?", a: "Yes, you can cancel anytime from your billing settings page." },
    { q: "What are AI credits?", a: "AI credits are used for generating scripts, titles, captions, and other smart features." },
    { q: "How do I buy AI credits?", a: "You can purchase AI credits from your account settings under the AI tools section." },
    { q: "Is there a video limit?", a: "There is no limit on how many videos you can upload, based on your plan storage." },
    { q: "What happens if I go over my storage limit?", a: "You will be prompted to upgrade your plan or free up space." },
    { q: "Do team members share the storage limit?", a: "You will be prompted to upgrade your plan or free up space." },
    { q: "Is the Free plan just a free trial?", a: "You will be prompted to upgrade your plan or free up space." },
    { q: "Do you have duration or file-size restrictions?", a: "You will be prompted to upgrade your plan or free up space." },
    { q: "Can I stream live events with Vimeo?", a: "You will be prompted to upgrade your plan or free up space." },
    { q: "Do Vimeo's self-serve plans have a bandwidth limit?", a: "You will be prompted to upgrade your plan or free up space." },
    { q: "What are the different types of seats or users I can have on my plan?", a: "You will be prompted to upgrade your plan or free up space." },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f6f8fa] py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* LEFT SUPPORT BOX */}
        <div>
          <h3 className="text-xl text-gray-700">Have questions?</h3>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2 text-[#111827] leading-snug">
            We have 24/7 support <br /> available.
          </h2>

          <button className="mt-6 bg-black text-white py-3 px-26 rounded-xl font-medium">
            Contact support
          </button>
        </div>

        {/* RIGHT FAQ ACCORDION */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openFAQ === index;

            return (
              <div
                key={index}
                className={`rounded-xl transition  ${
                  isOpen ? "bg-white shadow-sm" : "bg-transparent border-transparent"
                }`}
              >
                {/* QUESTION ROW */}
                <button
                  className="w-full flex justify-between items-center text-left py-5 px-6"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-[#111827]">{item.q}</span>

                  {/* + / - ICON */}
                  <span className="text-2xl text-gray-700">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* ANSWER SECTION */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 px-6 pb-5" : "max-h-0 px-6 pb-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
          <button className="mt-6 bg-black text-white py-3 px-6 rounded-xl font-medium">
            Go to Help Center
          </button>
        </div>

      </div>
    </section>
  );
}
