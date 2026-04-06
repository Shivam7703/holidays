"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaLinkedinIn,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { logo, patta, patta2 } from "@/assets";

export default function Footer({ footer }: any) {
  return (
    <footer className="relative overflow-hidden z-10 bg-white">
      {/* ── Top accent line ── */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-color2 to-color1" />

      {/* ── Blobs ── */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-color2/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-amber-200/20 rounded-full blur-[100px] pointer-events-none" />

      {/* ══════════ MAIN FOOTER GRID ══════════ */}
      <div className="relative z-10  mx-auto px-6 sm:px-10 lg:px-20 pt-16 pb-10 flex flex-wrap gap-y-9 justify-between">
        {/* ── Col 1: Logo + about + socials ── */}
        <div className="lg:w-[25%] sm:w-[48%] w-full font1 flex flex-col gap-5">
          {/* Logo */}
          {footer?.logo && (
            <Image
              src={logo}
              alt="logo"
              className="max-w-[200px] w-[55vw] sm:w-48 object-contain"
            />
          )}

          {/* Tagline */}
          <p className="text-gray-600 font1 leading-relaxed ">
            {footer?.text ??
              "Your trusted travel partner for unforgettable journeys and beautiful destinations around the world."}
          </p>

          {/* Socials */}
          {footer?.socials && (
            <div className="flex gap-2.5 flex-wrap">
              {[
                { key: "facebook", Icon: FaFacebook },
                { key: "instagram", Icon: AiFillInstagram },
                { key: "linkedin", Icon: FaLinkedinIn },
                { key: "youtube", Icon: TbBrandYoutubeFilled },
                { key: "twitter", Icon: FaXTwitter },
              ].map(({ key, Icon }) =>
                footer.socials[key] ? (
                  <button
                    title="button"
                    key={key}
                    onClick={() => window.open(footer.socials[key], "_blank")}
                    className="w-9 h-9 rounded-full bg-white border border-color2/20 flex items-center justify-center
                               text-color2 hover:bg-color2 hover:text-white hover:border-color2
                               shadow-sm transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="text-base" />
                  </button>
                ) : null
              )}
            </div>
          )}
        </div>

        {/* ── Col 2: Quick Links ── */}
        <div className="lg:w-[20%] sm:w-[48%] w-full flex flex-col gap-4">
          <h4 className="text-color1 font-black text-base uppercase tracking-widest relative after:block after:w-8 after:h-[3px] after:bg-color2 after:rounded-full after:mt-2">
            {footer?.list2?.title ?? "Quick Links"}
          </h4>
          <ul className="space-y-2.5">
            {footer?.list2?.links?.map((d: any, i: number) => (
              <li key={i}>
                <Link
                  href={d?.href}
                  className="text-gray-600 font1 flex items-center gap-2 group hover:text-color2 transition-colors duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-color2/40 group-hover:bg-color2 transition-colors duration-300 shrink-0" />
                  {d?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Col 3: Services / list1 ── */}
        <div className="lg:w-[20%] sm:w-[48%] w-full flex flex-col gap-4">
          <h4 className="text-color1 font-black text-base uppercase tracking-widest relative after:block after:w-8 after:h-[3px] after:bg-amber-400 after:rounded-full after:mt-2">
            {footer?.list1?.title ?? "Services"}
          </h4>
          <ul className="space-y-2.5">
            {footer?.list1?.links?.map((d: any, i: number) => (
              <li key={i}>
                <Link
                  href={d?.href}
                  className="text-gray-600 font1 flex items-center gap-2 group hover:text-color2 transition-colors duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/50 group-hover:bg-amber-400 transition-colors duration-300 shrink-0" />
                  {d?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Col 4: Contact ── */}
        <div className="lg:w-[26%] sm:w-[48%] w-full font1 flex flex-col gap-4">
          <h4 className="text-color1 font-black text-base uppercase tracking-widest relative after:block after:w-8 after:h-[3px] after:bg-color1 after:rounded-full after:mt-2">
            {footer?.newLetter?.title ?? "Contact Us"}
          </h4>

          <div className="space-y-4">
            {/* Phone */}

            <a href="tel:0679513203" className="flex items-start gap-3 group">
              <div className="w-9 h-9 rounded-full bg-color2/10 border border-color2/20 flex items-center justify-center shrink-0 group-hover:bg-color2 transition-all duration-300">
                <FaPhone className="text-color2 text-xs group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-color2 font-bold">
                  Phone
                </p>
                <p className="text-gray-700 font1 font-medium">
                  0679513203, 0677066361
                </p>
              </div>
            </a>

            {/* Email */}

            <a
              href="mailto:info@valueadzcoreoverseas.com"
              className="flex items-start gap-3 group"
            >
              <div className="w-9 h-9 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center shrink-0 group-hover:bg-amber-400 transition-all duration-300">
                <FaEnvelope className="text-amber-500 text-xs group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-amber-500 font-bold">
                  Email
                </p>
                <p className="text-gray-700 font1 font-medium break-all">
                  info@valueadzcoreoverseas.com
                </p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-color1/10 border border-color1/20 flex items-center justify-center shrink-0">
                <FaLocationDot className="text-color1 text-xs" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-color1 font-bold">
                  Address
                </p>
                <p className="text-gray-700 font1 leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  voluptate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Building silhouette strip ── */}
      {patta && (
        <div className="relative z-10 w-full overflow-hidden mt-4 leading-none">
          <div className="flex ">
            {Array.from({ length: 4 }).map((_, i) => (
              <Image
                src={patta2}
                alt="city"
                className="w-[38vw] object-cover object-bottom opacity-80"
              />
            ))}
          </div>
        </div>
      )}

      {/* ── Divider ── */}
      <div className="relative z-10 mx-6 sm:mx-10 lg:mx-20 h-px bg-gradient-to-r from-transparent via-color2/30 to-transparent" />

      {/* ── Copyright bar ── */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 px-6 sm:px-10 lg:px-20 py-5">
        <p className="text-gray-500 text-xs font1 sm:font1 text-center sm:text-left">
          {footer?.copyrightText ?? "© 2026 All rights reserved."}{" "}
          <a
            href="https://skywarddigitalsolutions.com"
            className="text-color2 font-bold hover:text-color1 transition-colors duration-300"
          >
            Skyward Digital Solutions
          </a>
        </p>

        {/* mini nav */}
        <div className="flex items-center gap-4 text-xs text-gray-500">
          {["Privacy Policy", "Terms of Use"].map((t, i) => (
            <Link
              key={i}
              href="/"
              className="hover:text-color2 transition-colors duration-300"
            >
              {t}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
