"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaClock, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { IoHelpCircle } from 'react-icons/io5';

function PackageDetail({ data }: any) {
  if (!data) return <div className="text-center py-10 text-gray-500">Loading package details...</div>;

  const [selectedVariant, setSelectedVariant] = useState(data.allPricingVariants?.variants[0] || null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 antialiased font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Balanced 2-Column Layout Grid (8 Columns for Content, 4 Columns for Sidebar Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT SIDE: IMAGE + ALL CONTENT BOXES (Takes 8 Columns) ================= */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Main Package Image Box using next/image */}
            <div className="bg-white p-3 rounded-3xl shadow-sm border border-slate-100">
              <div className="relative h-[320px] sm:h-[480px] lg:h-[60vh] w-full overflow-hidden rounded-2xl shadow-inner">
                <Image 
                  src={data.img} 
                  alt={data.title || "Package Image"} 
                  className="object-contain w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Duration Overlay Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-teal-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider shadow">
                    <FaClock size={11} /> {data.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Title & Identity */}
            <div className="border-b border-slate-200 pb-4">
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
                {data.title}
              </h1>
              <p className="text-slate-500 text-sm mt-1">Experience the ultimate cultural & adventure hub</p>
            </div>

            {/* Overview Section */}
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-lg font-bold mb-3 text-slate-900 border-l-4 border-teal-500 pl-2">Overview</h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {data.description}
              </p>
            </section>

            {/* Tour Highlights Section */}
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-lg font-bold mb-4 text-slate-900 border-l-4 border-teal-500 pl-2">Tour Highlights</h2>
              <ul className="space-y-3">
                {data.highlights?.map((highlight: string, index: number) => (
                  <li key={index} className="flex gap-3 text-slate-600 items-start text-sm md:text-base">
                    <span className="flex-shrink-0 h-5 w-5 rounded-md bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-xs mt-0.5">
                      {index + 1}
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Day Wise Itinerary Section */}
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-lg font-bold mb-5 text-slate-900 border-l-4 border-teal-500 pl-2">Day Wise Itinerary</h2>
              <div className="relative border-l-2 border-teal-100 ml-3 space-y-6">
                {data.itinerary?.map((item: any, index: number) => (
                  <div key={index} className="relative pl-6">
                    <div className="absolute -left-[7px] top-1.5 bg-teal-500 border-4 border-white h-3.5 w-3.5 rounded-full shadow-sm" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-1.5 py-0.5 rounded">
                          {item.day}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                      </div>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-500" size={14} /> Inclusions
                </h3>
                <ul className="space-y-2">
                  {data.includesAndExcludes?.includes?.map((inc: string, idx: number) => (
                    <li key={idx} className="text-xs md:text-sm text-slate-600 flex gap-2 items-start">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <FaTimesCircle className="text-rose-500" size={14} /> Exclusions
                </h3>
                <ul className="space-y-2">
                  {data.includesAndExcludes?.excludes?.map((exc: string, idx: number) => (
                    <li key={idx} className="text-xs md:text-sm text-slate-600 flex gap-2 items-start">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQs Accordion Section */}
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-lg font-bold mb-4 text-slate-900 flex items-center gap-2">
                <IoHelpCircle className="text-indigo-500" size={20} /> FAQs
              </h2>
              <div className="space-y-3">
                {data.faqs?.map((faq: any, index: number) => (
                  <div key={index} className="border border-slate-100 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-3.5 bg-slate-50/50 hover:bg-slate-50 transition-colors text-left"
                    >
                      <span className="font-semibold text-slate-800 text-xs md:text-sm">{faq.question}</span>
                      {openFaq === index ? <FaChevronUp size={10} className="text-slate-500" /> : <FaChevronDown size={10} className="text-slate-500" />}
                    </button>
                    {openFaq === index && (
                      <div className="p-3.5 bg-white border-t border-slate-50 text-slate-600 text-xs md:text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* ================= RIGHT SIDE: STICKY BOOKING / PRICING SIDEBAR (Takes 4 Columns) ================= */}
          <div className="lg:col-span-4 lg:sticky lg:top-20 space-y-4">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 space-y-5">
              
              {/* Pricing Display */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Selected Option</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-3xl font-black text-slate-950">
                    {selectedVariant ? selectedVariant.displayPrice : data.allPricingVariants?.variants[0]?.displayPrice}
                  </span>
                  <span className="text-xs text-slate-400 font-bold">({data.allPricingVariants?.currency})</span>
                </div>
              </div>

              {/* Variant Selection List - Height is dynamic, Scrollbar removed */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Available Variants</label>
                <div className="space-y-2">
                  {data.allPricingVariants?.variants?.map((variant: any, idx: number) => {
                    const isSelected = selectedVariant?.type === variant.type;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedVariant(variant)}
                        className={`w-full flex flex-col p-3 rounded-xl border text-left transition-all ${
                          isSelected 
                            ? 'border-teal-500 bg-teal-50/40 ring-1 ring-teal-500 font-medium' 
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <span className={`text-xs font-bold ${isSelected ? 'text-teal-950' : 'text-slate-700'}`}>
                          {variant.type}
                        </span>
                        <span className={`text-sm mt-0.5 ${isSelected ? 'text-teal-600 font-black' : 'text-slate-500'}`}>
                          {variant.displayPrice}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Booking Action Buttons */}
              <div className="pt-2 space-y-2">
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 px-4 rounded-xl transition-colors shadow-sm tracking-wide text-xs uppercase">
                  Proceed To Book
                </button>
                <button className="w-full bg-white hover:bg-slate-50 text-slate-700 font-bold py-3 px-4 border border-slate-200 rounded-xl transition-colors text-xs uppercase">
                  Enquire Now
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PackageDetail;