import React, { useState } from "react";
import { FiUser, FiDatabase, FiVideo } from "react-icons/fi";
import ComparePlans from "./Compare_Plans";
import FAQSection from "./FAQ";
import Footer_2 from "./Footer_2";
import Navbar_2Logo from "../../assets/Hero_Section_Video/Overshoot_Media_Logo.jpg"
import { useNavigate } from "react-router-dom";
import { Footer } from "../../Components/Footer";

export const Pricing = () => {

  const [billing, setBilling] = useState("monthly");

  const navigate = useNavigate();

  /* MONTHLY PLANS (FULL EXACT DETAILS) */

  // const monthlyPlans = [
  //   {
  //     name: "Starter Pack",
  //     price: "5 Videos – ₹6,000",
  //     users: "1 user",
  //     storage: "2TB storage",
  //     btn: "Get Started →",
  //     border: false,
  //     featuresTitle: "Key features:",
  //     features: [
  //       "₹1,200 per video",
  //       "Ideal for testing campaigns",
  //       "Shorts / Reels / Promo format",
  //       "Brand-safe creator content",
  //       "Standard delivery timeline",
  //     ],
  //   },

  //   {
  //     name: "Growth Pack ",
  //     price: "₹2,500",
  //     users: "5 users",
  //     storage: "4TB storage",
  //     recommended: true,
  //     border: true,
  //     btn: " Choose Growth →",
  //     featuresTitle: "Everything in Starter, plus:",
  //     features: [
  //       "₹1,200 per video",
  //       "Bulk content creation",
  //       "Multiple creators if required",
  //       "Priority delivery",
  //       " Campaign-ready formats",
  //     ],
  //   },

  //   {
  //     name: "Scale Your Campaign",
  //     price: "₹7,523",
  //     users: "10 users",
  //     storage: "7TB storage",
  //     border: false,
  //     btn: "Pro Campaign Pack",
  //     featuresTitle: "Everything in Standard, plus:",
  //     features: [
  //       "₹1,200 per video",
  //       "Dedicated creator support",
  //       "Content calendar assistance",
  //       "Faster revisions",
  //       "High-volume campaign execution",
  //     ],
  //   },

  //   {
  //     name: "Go Pro",
  //     price: "",
  //     users: "More users",
  //     storage: "More storage and bandwidth",
  //     contact: true,
  //     border: false,
  //     btn: "Enterprise / Custom Pack",
  //     featuresTitle: "Everything in Advanced, plus:",
  //     features: [
  //       "Dedicated creator teams",
  //       "Regional language creators",
  //       "Brand face creators",
  //       "AI-assisted scaling",
  //       "SLA-based delivery",
  //     ],
  //   },
  // ];

  const monthlyPlans = [
    {
      name: "Starter Pack",
      // price: "5 Videos – ₹6,000",
      users: "5 Videos – ₹6,000",
      storage: "2TB storage",
      btn: "Get Started →",
      border: false,
      featuresTitle: "Key features:",
      features: [
        "₹1,200 per video",
        "Ideal for testing campaigns",
        "Shorts / Reels / Promo format",
        "Brand-safe creator content",
        "Standard delivery timeline",
      ],
    },

    {
      name: "Growth Pack (Most Popular)",
      // price: "10 Videos – ₹12,000",
      users: "10 Videos – ₹12,000",
      storage: "4TB storage",
      recommended: true,
      border: true,
      btn: "Choose Growth →",
      featuresTitle: "Key features:",
      features: [
        "₹1,200 per video",
        "Faster turnaround",
        "Consistent creator quality",
        "Optimized for social platforms",
        "Best for monthly campaigns",
      ],
    },

    {
      name: "Scale Pack",
      // price: "20 Videos – ₹24,000",
      users: "20 Videos – ₹24,000",
      storage: "7TB storage",
      border: false,
      btn: "Scale Your Campaign →",
      featuresTitle: "Key features:",
      features: [
        "₹1,200 per video",
        "Bulk content creation",
        "Multiple creators if required",
        "Priority delivery",
        "Campaign-ready formats",
      ],
    },

    {
      name: "Pro Campaign Pack",
      // price: "30 Videos – ₹36,000",
      users: "30 Videos – ₹36,000",
      storage: "More storage and bandwidth",
      contact: true,
      border: false,
      btn: "Go Pro →",
      featuresTitle: "Key features:",
      features: [
        "₹1,200 per video",
        "Dedicated creator support",
        "Content calendar assistance",
        "Faster revisions",
        "High-volume campaign execution",
      ],
    },

    {
      name: "Enterprise / Custom Pack",
      // price: "50+ Videos – Custom Pricing",
      users: "50+ Videos – Custom Pricing",
      storage: "Unlimited storage",
      contact: true,
      border: false,
      btn: "Talk to Sales →",
      featuresTitle: "Key features:",
      features: [
        "Dedicated creator teams",
        "Regional language creators",
        "Brand face creators",
        "AI-assisted scaling",
        "SLA-based delivery",
      ],
    },
  ];


  /*  ANNUALLY PLANS (FULL EXACT DETAILS) */
  // const annuallyPlans = [
  //   {
  //     name: "Starter",
  //     price: "₹720",
  //     users: "1 user",
  //     storage: "2TB storage",
  //     border: false,
  //     btn: "Start free trial",
  //     link: true,
  //     featuresTitle: "Key features:",
  //     features: [
  //       "Customizable video player",
  //       "Password privacy & unlisted links",
  //       "Review & collaboration tools",
  //       "Transfer video files",
  //       "Engagement analytics",
  //     ],
  //   },

  //   {
  //     name: "Standard",
  //     price: "₹1,500",
  //     users: "5 users",
  //     storage: "4TB storage",
  //     recommended: true,
  //     border: true,
  //     btn: "Start free trial",
  //     link: true,
  //     featuresTitle: "Everything in Starter, plus:",
  //     features: [
  //       "Branding in the player",
  //       "Third party player support",
  //       "Custom watermark",
  //       "Branded video galleries",
  //       "Lead capture",
  //       "Calls to action and custom cards",
  //     ],
  //   },

  //   {
  //     name: "Advanced",
  //     price: "₹4,500",
  //     users: "10 users",
  //     storage: "7TB storage",
  //     border: false,
  //     btn: "Start free trial",
  //     link: true,
  //     featuresTitle: "Everything in Standard, plus:",
  //     features: [
  //       "Hosted livestreamed events",
  //       "Events Q&A, polls, and chat",
  //       "Stream to multiple destinations",
  //       "DVR streaming",
  //       "Scheduled simulive",
  //       "Live event-level analytics",
  //       "Marketing automation integrations",
  //     ],
  //   },

  //   {
  //     name: "Enterprise",
  //     price: "",
  //     users: "More users",
  //     storage: "More storage and bandwidth",
  //     contact: true,
  //     border: false,
  //     btn: "Contact sales",
  //     featuresTitle: "Everything in Advanced, plus:",
  //     features: [
  //       "Custom permissions",
  //       "Advanced AI capabilities",
  //       "SSO (SAML) and SCIM (OKTA, AZURE)",
  //       "Advanced analytics and marketing integrations",
  //       "Events with polling and Live Q&A",
  //       "Quality events (backup streams, eCDN)",
  //       "Dedicated support",
  //     ],
  //   },
  // ];

  const annuallyPlans = [
    {
      name: "Starter Pack",
      users: "60 Videos – ₹72,000", 
      storage: "2TB storage",
      border: false,
      btn: "Get Started →",
      link: true,
      featuresTitle: "Key features:",
      features: [
        "₹1,200 per video",
        "Ideal for testing campaigns",
        "Shorts / Reels / Promo format",
        "Brand-safe creator content",
        "Standard delivery timeline",
      ],
    },

    {
      name: "Growth Pack (Most Popular)",
      users: "120 Videos – ₹1,44,000", 
      storage: "4TB storage",
      recommended: true,
      border: true,
      btn: "Choose Growth →",
      link: true,
      featuresTitle: "Key features:",
      features: [
        "₹1,200 per video",
        "Faster turnaround",
        "Consistent creator quality",
        "Optimized for social platforms",
        "Best for monthly campaigns",
      ],
    },

    {
      name: "Scale Pack",
      users: "240 Videos – ₹2,88,000", 
      storage: "7TB storage",
      border: false,
      btn: "Scale Your Campaign →",
      link: true,
      featuresTitle: "Key features:",
      features: [
        "₹1,200 per video",
        "Bulk content creation",
        "Multiple creators if required",
        "Priority delivery",
        "Campaign-ready formats",
      ],
    },

    {
      name: "Pro Campaign Pack",
      users: "360 Videos – ₹4,32,000", 
      storage: "More storage and bandwidth",
      contact: true,
      border: false,
      btn: "Go Pro →",
      featuresTitle: "Key features:",
      features: [
        "₹1,200 per video",
        "Dedicated creator support",
        "Content calendar assistance",
        "Faster revisions",
        "High-volume campaign execution",
      ],
    },

    {
      name: "Enterprise / Custom Pack",
      users: "600+ Videos – Custom Pricing", 
      storage: "Unlimited storage",
      contact: true,
      border: false,
      btn: "Talk to Sales →",
      featuresTitle: "Key features:",
      features: [
        "Dedicated creator teams",
        "Regional language creators",
        "Brand face creators",
        "AI-assisted scaling",
        "SLA-based delivery",
      ],
    },
  ];




  const plans = billing === "monthly" ? monthlyPlans : annuallyPlans;

  const handleBackHome = () => {
    navigate("/");
  }

  return (
    <>

        
        
        {/* Ultimate ad-free player */}
        <div className="w-full bg-[#f6f8fa] min-h-screen pt-20 pb-24 px-6 flex flex-col items-center">

            <div className="">
                <div className='-ml-34  md:-ml-144  2xl:-ml-186 mb-20  -mt-13 w-30 sm:w-50 md:w-80 lg:w-34 2xl:w-34 cursor-pointer'>
                    <img src={Navbar_2Logo} alt="Navbar_Logo" onClick={handleBackHome}/>
                </div>
            </div>

            {/* PAGE TITLE */}
            <h1 className="text-xl sm:text-4xl font-medium text-[#16171a] text-center">
                Simple Pricing No hidden Costs Scale your <br /> video campaigns with confidence.
            </h1>

            {/* <p className="mt-4 text-center text-gray-600">
                Start a free trial, or get started with our basic plan
            </p> */}

            {/* BILLING SWITCH */}
            <div className="flex items-center justify-center gap-4">
                <div className="mt-6 flex items-center gap-4 bg-white px-4 py-2 border border-black rounded-full">

                <button
                    className={`px-4 py-1 rounded-full ${
                    billing === "monthly" ? "bg-black text-white" : "text-gray-700"
                    }`}
                    onClick={() => setBilling("monthly")}
                >
                    Monthly
                </button>

                <button
                    className={`px-4 py-1 rounded-full ${
                    billing === "annually" ? "bg-black text-white" : "text-gray-700"
                    }`}
                    onClick={() => setBilling("annually")}
                >
                    Annually
                </button>
                </div>

                {/* <span className="text-xs bg-[#e6eaf0] text-[#555] px-3 py-1 mt-5 rounded-full">
                  Save 40%
                </span> */}
            </div>

            {/* CARDS GRID */}
            {/* <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl w-full"> */}

            <div className="
              mt-12 
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-3 
              xl:grid-cols-4 
              2xl:grid-cols-5 
              gap-6 
              max-w-screen-2xl 
              w-full
            ">


                {plans.map((plan, i) => (
                <div
                    key={i}
                    className={`bg-white rounded-[28px] shadow p-8 border-[2px] relative ${
                    plan.border ? "border-[#6d4aff] shadow-xl" : "border-gray-300"
                    }`}
                >

                    {/* RECOMMENDED LABEL — EXACTLY LIKE IMAGE WITH CUT BOTTOM */}
                    {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 
                                    bg-gradient-to-r from-[#7a5eff] to-[#4f29ff] text-white text-xs font-medium 
                                    px-6 py-1.5 rounded-t-lg rounded-b-md 
                                    border-b-0">
                        Recommended
                    </div>
                    )}

                    {/* TITLE */}
                    <h3 className="text-base font-semibold">{plan.name}</h3>

                    {/* PRICE */}
                    {/* {plan.price ? (
                      <>
                          <div className="text-lg font-bold mt-4">{plan.price}</div>
                          <p className="text-gray-600 text-sm mt-1">per month</p>
                          <p className="text-gray-400 text-xs">
                            billed {billing === "monthly" ? "monthly" : "annually"}
                          </p>
                      </>
                    ) : (
                        <p className="mt-6 text-gray-600">
                            Talk to our team for <br /> pricing
                        </p>
                    )} */}

                    {/* CTA BUTTON */}
                    <button
                    className={`mt-6 w-full py-2.5 rounded-full font-semibold cursor-pointer ${
                        plan.contact 
                        ? "bg-black text-white hover:bg-gray-800" 
                        : "bg-[#17d5ff] text-black hover:bg-[#0fc9f0]"
                    } transition-colors`}
                    >
                    {plan.btn}
                    </button>

                    {/* PURCHASE NOW — ONLY FOR ANNUALLY */}
                    {/* {plan.link && (
                      <p className="text-center mt-2 text-sm underline text-gray-600 cursor-pointer hover:text-gray-800">
                          or purchase now
                      </p>
                    )} */}

                    {/* FEATURES */}
                    <div className="mt-6 text-sm text-gray-700">
                        <p className="font-semibold">{plan.featuresTitle}</p>

                        <ul className="mt-3 space-y-2">
                            <li className="flex items-center gap-2 text-xs text-black font-medium">
                            <FiVideo className="text-black" /> {plan.users}
                            </li>

                            {/* <li className="flex items-center gap-2">
                              <FiDatabase className="text-gray-600" /> {plan.storage}
                            </li> */}
                        </ul>

                        <hr className="my-4" />

                        {plan.features.map((f, idx) => (
                            <div key={idx} className="flex gap-2 mb-2">
                              <span className="text-[#6d4aff] font-bold">✓</span> 
                              <span className="text-sm">{f}</span>
                            </div>
                        ))}
                    </div>

                    {/* COMPARE LINK */}
                    <p className="mt-6 text-xs underline cursor-pointer hover:text-gray-800">
                      Compare all features
                    </p>
                </div>
                ))}
            </div>
        </div>

        {/* Compare_Plans section */}
        <ComparePlans />

        {/* FAQ Section */}
        <FAQSection />

        {/* Upgrade-Footer Section */}
        <Footer />

    </>
  );
};