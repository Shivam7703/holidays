"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdOutlineChat } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { blogData as latestBlogs } from "@/data/homeData";
import { FaDownload, FaLocationArrow, FaRegUserCircle } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const data = [
  {
    id: 1,
    label: "Domestic",
    href: "#",
    subNav: [
      { id: 1, label: "Himachal Pradesh", href: "/destinations/himachal-pradesh" },
      { id: 2, label: "Andaman & Nicobar", href: "/destinations/andaman-nicobar-islands" },
      { id: 3, label: "Kashmir", href: "/destinations/kashmir" },
      { id: 4, label: "Sikkim", href: "/destinations/sikkim" },
      { id: 5, label: "Kerala", href: "/destinations/kerala" },
      { id: 6, label: "Goa", href: "/destinations/goa" },
      { id: 7, label: "Leh-Ladakh", href: "/destinations/leh-ladakh" },
      { id: 8, label: "Darjeeling", href: "/destinations/darjeeling" },
      { id: 9, label: "Jaipur", href: "/destinations/jaipur" },
      { id: 10, label: "Agra", href: "/destinations/agra" },
      { id: 11, label: "Ranthambore", href: "/destinations/ranthambore" },
      { id: 12, label: "Rishikesh", href: "/destinations/rishikesh" },
    ],
  },
  {
    id: 2,
    label: "International",
    href: "#",
    subNav: [
      { id: 1, label: "Dubai", href: "/destinations/dubai" },
      { id: 2, label: "Thailand", href: "/destinations/thailand" },
      { id: 3, label: "Vietnam", href: "/destinations/vietnam" },
      { id: 4, label: "Maldives", href: "/destinations/maldives" },
      { id: 5, label: "Hong Kong", href: "/destinations/hong-kong" },
      { id: 6, label: "Turkey", href: "/destinations/turkey" },
      { id: 7, label: "China", href: "/destinations/china" },
      { id: 8, label: "Abu Dhabi", href: "/destinations/abu-dhabi" },
      { id: 9, label: "Switzerland", href: "/destinations/switzerland" },
      { id: 10, label: "Almaty", href: "/destinations/almaty" },
      { id: 11, label: "Georgia", href: "/destinations/georgia" },
      { id: 12, label: "Azerbaijan", href: "/destinations/azerbaijan" },
      { id: 14, label: "Bhutan", href: "/destinations/bhutan" },
      { id: 15, label: "Russia", href: "/destinations/russia" },
      { id: 16, label: "Japan", href: "/destinations/japan" },
    ],
  },
];

const inputFields = [
  { name: "name", label: "Name", type: "text", icon: FaRegUserCircle, placeholder: "John Doe" },
  { name: "phone", label: "Phone", type: "tel", icon: FiPhone, placeholder: "+1 (555) 000-0000" },
  { name: "email", label: "Email", type: "email", icon: FiMail, placeholder: "john@example.com" },
  { name: "location", label: "Location", type: "text", icon: FaLocationArrow, placeholder: "City, Country" },
  { name: "subject", label: "Subject", type: "text", icon: IoChatboxEllipsesOutline, placeholder: "How can we help?" },
];

const domesticDestinations = data[0].subNav;
const internationalDestinations = data[1].subNav;

function DestinationList({ items }: { items: { id: number; label: string; href: string }[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item.id}
          className="group rounded-xl overflow-hidden bg-white border border-zinc-200
                     transition-all duration-300 hover:border-teal-500 hover:shadow-md"
        >
          <Link href={item.href} className="flex items-center">
            <div
              className="flex items-center justify-center px-4 py-3 text-zinc-400
                         transition-all duration-300
                         group-hover:text-white
                         group-hover:bg-gradient-to-br
                         group-hover:from-color1
                         group-hover:to-teal-700"
            >
              <FaChevronRight className="text-xs" />
            </div>
            <p
              className="flex-1 px-3 py-3 text-sm font-medium text-zinc-700
                         transition-colors duration-300 group-hover:text-teal-700"
            >
              {item.label}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function BlogAside() {
  const createSlug = (title: string): string =>
    title.trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return (
    <div className="space-y-6">

      {/* ── Contact Form ── */}
      <form className="bg-white rounded-2xl p-6 shadow-lg border border-zinc-100">
        <h4 className="mb-4 text-xl font-bold text-zinc-900">Get In Touch</h4>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            {inputFields.slice(0, 4).map((field) => {
              const Icon = field.icon;
              return (
                <div key={field.name}>
                  <label className="block text-zinc-600 font-medium mb-1 text-xs">
                    {field.label}
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10">
                      <Icon size={14} />
                    </div>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="w-full pl-8 pr-3 py-2 bg-zinc-50 rounded-xl text-zinc-800
                                 placeholder-zinc-400 border border-zinc-200 text-xs
                                 focus:outline-none focus:bg-white focus:border-teal-400
                                 transition-all duration-200 shadow-inner"
                      required
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Subject full width */}
          {inputFields.slice(4).map((field) => {
            const Icon = field.icon;
            return (
              <div key={field.name}>
                <label className="block text-zinc-600 font-medium mb-1 text-xs">
                  {field.label}
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10">
                    <Icon size={14} />
                  </div>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full pl-8 pr-4 py-2 bg-zinc-50 rounded-xl text-zinc-800
                               placeholder-zinc-400 border border-zinc-200 text-xs
                               focus:outline-none focus:bg-white focus:border-teal-400
                               transition-all duration-200 shadow-inner"
                    required
                  />
                </div>
              </div>
            );
          })}

          {/* Message */}
          <div>
            <label className="block text-zinc-600 font-medium mb-1 text-xs">Message</label>
            <div className="relative">
              <div className="absolute left-3 top-3 text-zinc-400 z-10">
                <MdOutlineChat size={14} />
              </div>
              <textarea
                name="message"
                rows={3}
                placeholder="Tell us more about your inquiry..."
                className="w-full pl-8 pr-4 py-2 bg-zinc-50 rounded-xl text-zinc-800
                           placeholder-zinc-400 border border-zinc-200 text-xs resize-none
                           focus:outline-none focus:bg-white focus:border-teal-400
                           transition-all duration-200 shadow-inner"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl px-6 py-2.5 text-sm font-semibold text-white
                       bg-gradient-to-r from-color1 to-teal-600
                       hover:from-teal-900 hover:to-teal-700
                       active:scale-95 transition-all duration-200 shadow-md"
          >
            Submit Now
          </button>
        </div>
      </form>

      {/* ── Latest Blogs ── */}
      <div className="bg-gradient-to-br from-white to-zinc-50 p-6 rounded-2xl border border-zinc-100 shadow-lg">
        <h4 className="mb-4 text-xl font-bold text-zinc-900">Latest Blogs</h4>
        <div className="space-y-3">
          {latestBlogs?.blog?.slice(0, 3).map((blog: any, index: number) => (
            <Link
              key={blog?.id || index}
              href={`/blogs/${createSlug(blog.title)}`}
              title={blog?.title}
              className="group block"
            >
              <div className="flex gap-3 p-2.5 bg-white rounded-2xl border border-zinc-200
                              transition-all duration-300 hover:border-teal-500 hover:shadow-lg">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={blog?.img}
                    alt={blog?.imgAlt || blog?.title}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <h5 className="text-xs font-semibold text-zinc-900 line-clamp-2 leading-snug
                                 group-hover:text-color1 transition-colors duration-300">
                    {blog?.title}
                  </h5>
                  <div className="flex items-center gap-1 text-xs font-semibold text-color1 mt-1">
                    <span>Read Article</span>
                    <FaChevronRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Domestic Destinations ── */}
      <div className="bg-gradient-to-br from-white to-zinc-50 p-6 rounded-2xl border border-zinc-100 shadow-lg">
        <h4 className="mb-4 text-xl font-bold text-zinc-900">Domestic Destinations</h4>
        <DestinationList items={domesticDestinations} />
      </div>

      {/* ── International Destinations ── */}
      <div className="bg-gradient-to-br from-white to-zinc-50 p-6 rounded-2xl border border-zinc-100 shadow-lg">
        <h4 className="mb-4 text-xl font-bold text-zinc-900">International Destinations</h4>
        <DestinationList items={internationalDestinations} />
      </div>

     
     <button
  type="button"
  onClick={() => window.open("tel:+919818929900")}
  className="group relative w-full inline-flex items-center justify-center gap-3
             rounded-xl px-6 py-3 font-semibold text-white
             bg-gradient-to-r from-teal-600 to-color1
             shadow-lg transition-all duration-300
             hover:shadow-xl hover:scale-[1.02] active:scale-95"
>
  <span className="flex items-center justify-center w-8 h-8 rounded-lg
                   bg-white/20 backdrop-blur-sm
                   transition-transform duration-300 group-hover:rotate-[-6deg]">
    <FiPhone className="text-base" />
  </span>
  <span className="text-sm tracking-wide">Call Now</span>
</button>

    </div>
  );
}

export default BlogAside;