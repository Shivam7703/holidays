"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineChat } from "react-icons/md";
import { FaLocationArrow, FaRegUserCircle, FaPhoneAlt } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/motion";

const inputFields = [
  { name: "name",     label: "Name",     type: "text",  icon: FaRegUserCircle,          placeholder: "John Doe"          },
  { name: "phone",    label: "Phone",    type: "tel",   icon: FiPhone,                  placeholder: "+1 (555) 000-0000" },
  { name: "email",    label: "Email",    type: "email", icon: FiMail,                   placeholder: "john@example.com"  },
  { name: "location", label: "Location", type: "text",  icon: FaLocationArrow,          placeholder: "City, Country"     },
  { name: "subject",  label: "Subject",  type: "text",  icon: IoChatboxEllipsesOutline, placeholder: "How can we help?"  },
];



export default function DestinationAside({ data }: any) {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <div className="space-y-5">

      {/* ── FORM CARD ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden z-[4] shadow-2xl"
      >
        {/* Gradient header */}
        <div className="relative bg-gradient-to-br from-teal-900 via-green-800 to-color1 px-6 pt-6 pb-10">
          {/* Decorative circles */}
          <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/10 blur-xl" />
          <div className="absolute bottom-2 left-4 w-16 h-16 rounded-full bg-indigo-400/20 blur-lg" />

          <div className="relative z-10 flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <HiSparkles className="text-white text-lg" />
            </span>
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">Book Your Trip</h3>
              <p className="text-blue-200 text-xs mt-0.5">Fill in details, we'll handle the rest</p>
            </div>
          </div>
        </div>

        {/* White form body — overlaps header */}
        <div className="bg-white mx-3 -mt-5 rounded-2xl shadow-lg px-5 py-6 space-y-4">

          {/* First 4 — 2 col */}
          <div className="grid grid-cols-2 gap-3">
            {inputFields.slice(0, 4).map((field) => {
              const Icon = field.icon;
              const isFocused = focused === field.name;
              return (
                <div key={field.name} className="space-y-1">
                  <label className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-200 ${isFocused ? "text-teal-700" : "text-zinc-700"}`}>
                    {field.label}
                  </label>
                  <div className={`relative flex items-center rounded-xl border transition-all duration-300 ${isFocused ? "border-teal-700 shadow-[0_0_0_3px_rgba(59,130,246,0.12)] bg-blue-50/50" : "border-zinc-400 bg-zinc-50"}`}>
                    <Icon size={13} className={`absolute left-3 transition-colors duration-200 ${isFocused ? "text-teal-700" : "text-zinc-700"}`} />
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused(null)}
                      className="w-full pl-8 pr-3 py-2.5 bg-transparent rounded-xl text-zinc-800 placeholder-zinc-500 text-xs focus:outline-none"
                      required
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Subject — full width */}
          {inputFields.slice(4).map((field) => {
            const Icon = field.icon;
            const isFocused = focused === field.name;
            return (
              <div key={field.name} className="space-y-1">
                <label className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-200 ${isFocused ? "text-teal-700" : "text-zinc-700"}`}>
                  {field.label}
                </label>
                <div className={`relative flex items-center rounded-xl border transition-all duration-300 ${isFocused ? "border-teal-700 shadow-[0_0_0_3px_rgba(59,130,246,0.12)] bg-blue-50/50" : "border-zinc-400 bg-zinc-50"}`}>
                  <Icon size={13} className={`absolute left-3 transition-colors duration-200 ${isFocused ? "text-teal-700" : "text-zinc-600"}`} />
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                    className="w-full pl-8 pr-3 py-2.5 bg-transparent rounded-xl text-zinc-800 placeholder-zinc-500 text-xs focus:outline-none"
                    required
                  />
                </div>
              </div>
            );
          })}

          {/* Message */}
          <div className="space-y-1">
            <label className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-200 ${focused === "message" ? "text-teal-700" : "text-zinc-700"}`}>
              Message
            </label>
            <div className={`relative rounded-xl border transition-all duration-300 ${focused === "message" ? "border-teal-700 shadow-[0_0_0_3px_rgba(59,130,246,0.12)] bg-blue-50/50" : "border-zinc-400 bg-zinc-50"}`}>
              <MdOutlineChat size={13} className={`absolute left-3 top-3.5 transition-colors duration-200 ${focused === "message" ? "text-teal-700" : "text-zinc-600"}`} />
              <textarea
                name="message"
                rows={3}
                placeholder="Tell us about your dream trip..."
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className="w-full pl-8 pr-4 py-2.5 bg-transparent rounded-xl text-zinc-800 placeholder-zinc-500 text-xs focus:outline-none resize-none"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="group w-full flex items-center justify-between
              bg-gradient-to-r from-blue-600 to-indigo-600
              hover:from-blue-700 hover:to-indigo-700
              text-white rounded-2xl px-5 py-3.5
              shadow-lg shadow-blue-500/30
              hover:shadow-xl hover:shadow-blue-500/40
              hover:-translate-y-0.5
              transition-all duration-300"
          >
            <span className="text-sm font-bold tracking-wide">Submit Enquiry</span>
            <span className="w-8 h-8 rounded-xl bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
              <BiRightArrowAlt size={18} />
            </span>
          </button>

        </div>

        {/* Bottom padding */}
        <div className="bg-white mx-3 mb-3 h-2 rounded-b-2xl" />
      </motion.div>

      {/* ── WHY CHOOSE US ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white  rounded-3xl p-6 shadow-xl border border-zinc-100 overflow-hidden relative"
      >
        {/* Decorative top-right blob */}
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-amber-100/60 blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center gap-3 mb-5 relative z-10">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md shadow-amber-300/40">
            <HiSparkles className="text-white text-sm" />
          </div>
          <h4 className="text-base font-extrabold text-zinc-800 leading-tight">
            Why Choose <span className="text-amber-500">ValueAdz</span>
          </h4>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-amber-300/60 via-orange-200/40 to-transparent mb-5" />

        {/* Points */}
        <div className="space-y-3 relative z-10">
          {data?.map((da: any, index: number) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group flex items-start gap-3 p-3 rounded-xl hover:bg-amber-50 transition-all duration-300 cursor-default"
            >
              <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                <FaChevronRight className="text-white text-[7px]" />
              </span>
              <p className="text-xs text-zinc-600 leading-relaxed">
                <span className="font-bold text-zinc-800">{da.heading} </span>
                {da.para}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── CONTACT CTA ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Link
          href="/contact-us"
          className="group relative z-[4] flex items-center justify-between gap-3
            rounded-3xl px-6 py-5
            bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700
            shadow-xl shadow-blue-500/30
            hover:shadow-2xl hover:shadow-blue-500/40
            hover:-translate-y-1
            transition-all duration-400 overflow-hidden"
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

          {/* Blob */}
          <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/10 blur-xl" />

          <div className="relative z-10">
            <p className="text-white font-extrabold text-base tracking-wide">Need Help Planning?</p>
            <p className="text-blue-200 text-xs mt-0.5">Talk to our travel experts today</p>
          </div>

          <span className="relative z-10 flex-shrink-0 w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm
            group-hover:bg-white/30 group-hover:scale-110
            flex items-center justify-center
            transition-all duration-300">
            <BiRightArrowAlt size={20} className="text-white" />
          </span>
        </Link>
      </motion.div>

      {/* ── QUICK CONTACT STRIP ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center gap-3 bg-gradient-to-r from-zinc-50 to-white rounded-2xl p-4 border border-zinc-100 shadow-sm"
      >
        <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
          <FaPhoneAlt className="text-color1 text-sm" />
        </div>
        <div>
          <p className="text-[10px] text-zinc-700 font-semibold uppercase tracking-widest">Call Us Directly</p>
          <a href="tel:+11234567890" className="text-zinc-800 font-bold text-sm hover:text-blue-600 transition-colors duration-200">
            +1 123 456 7890
          </a>
        </div>
        <div className="ml-auto w-2 h-2 rounded-full bg-color1 animate-pulse" />
      </motion.div>

    </div>
  );
}