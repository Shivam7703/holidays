"use client";
import React from "react";
import Image from "next/image";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { banner, man2 } from "@/assets"; // replace with your traveler image

const contactInfo = [
  {
    icon: FiPhone,
    label: "Contact Us",
    value: "+91 9818929900",
    color: "bg-[#0d6e6e]",
  },
  {
    icon: FiMail,
    label: "Send us a Mail",
    value: "info@holidaysbyvalueadz.com",
    color: "bg-[#c084a0]",
  },
  {
    icon: HiOutlineLocationMarker,
    label: "Address",
    value: "807, Bhandari House, Nehru Place,\n New Delhi, Delhi 110019",
    color: "bg-[#0d6e6e]",
  },
];

function Form() {
  return (
    <section className="w-full bg-white xl:px-32 lg:px-24 md:px-16 sm:px-10 px-6 py-16">
      <div className="flex flex-col md:flex-row gap-8 items-stretch">

        {/* ── LEFT: Form Card ── */}
        <div className="md:w-[48%] w-full bg-orange-100  rounded-3xl p-8 md:p-10 flex flex-col gap-6">
          {/* Heading */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-color1 leading-tight">
              <span className="text-amber-400">Reach</span>{" "}
              &amp; Get in Touch With Us!
            </h2>
            <p className="text-gray-700 md:text-lg mt-3">
              We'd love to hear from you. Our friendly team is always here to chat
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4">
            {/* Name */}
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 transition"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 transition"
            />

            {/* Subject */}
            <input
              type="text"
              placeholder="Select Your Subject"
              className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 transition"
            />

            {/* Message */}
            <textarea
              rows={5}
              placeholder="Message"
              className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 transition resize-none"
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-fit px-8 py-3 rounded-full bg-color1 hover:bg-color2 text-white font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* ── RIGHT: Contact Info + Image ── */}
        <div className="md:w-[50%] w-full flex flex-col justify-between gap-8 relative">

          {/* Top text */}
          <div>
            <h3 className="mt-4 md:mt-9 text-2xl sm:text-3xl font-extrabold text-color1">
              Get in Touch
            </h3>
            <p className="text-gray-500 sm:text-lg md:mt-4">
              We'd love to hear from you! Please fill out the form below.
            </p>
          </div>

          {/* Contact info cards + traveler image */}
          <div className="flex md:mt-14 gap-4 flex-1">
            {/* Info list */}
            <div className="flex flex-col md:gap-8 gap-5 flex-1">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <div key={i} className="flex items-center gap-4">
                    {/* Circle icon */}
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${info.color}`}
                    >
                      <Icon className="text-white text-xl" />
                    </div>
                    {/* Text */}
                    <div>
                      <p className="text-gray-400 md:text-lg font-medium">{info.label}</p>
                      <p className="text-gray-800 font-bold text-lg leading-snug whitespace-pre-line">
                        {info.value}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Bottom tagline */}
              <p className="mt-4 text-3xl font-bold italic text-gray-800">
                Let's{" "}
                <span className="text-amber-400 font-extrabold not-italic">Talk</span>{" "}
                About Your Plan !
              </p>
            </div>

            {/* Traveler image */}
            <div className="relative w-40 sm:w-52 max-sm:hidden sm:h-80 ">
              <Image
                src={man2}
                alt="Traveler"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Form;