"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import { VscChromeClose } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaShoppingCart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import { logo, logo2 } from "@/assets";
import { navigationMenu } from "@/data/homeData";
import { fadeIn, staggerContainer, slideIn } from "@/utils/motion";

const Header = ({ header }: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navItems, setNavItems] = useState<any[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setIsAtTop(current < 80);
      setLastScrollY(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setNavItems(header?.navItems || []);
  }, [header]);

  return (
    <>
      <header className={`fixed left-0 w-full z-50 transition-all duration-300 ${isAtTop ? "top-0 md:top-8" : "top-0"}`}>

        {/* ================= DESKTOP HEADER ================= */}
        <motion.div
          variants={slideIn("down", "tween", 0, 0.6)}
          initial="hidden"
          animate="show"
          className="max-md:hidden lg:w-[96%] mx-auto rounded-2xl bg-white"
        >
          <div className="w-full flex relative p-4 items-center justify-between">

            {/* LEFT NAV */}
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 0.6)}
              initial="hidden"
              animate="show"
              className="flex items-center w-[42%]"
            >
              <Menu
                navItemsArray={navItems}
                Items={navigationMenu.primaryMenu}
                Isprimary
              />
            </motion.div>

            {/* LOGO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.3 }} className="w-[14%] "
            >
              <Link href={header?.href || "/"} className="w-full h-full relative z-10 block">
                <Image
                  src={logo}
                  alt="Logo"
                  className="w-[70%] mx-auto object-contain hover:scale-105 transition"
                />
                <div className="w-full absolute -bottom-9 left-0 h-16 bg-white  z-[-1] rounded-[100%]" />
              </Link>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 0.6)}
              initial="hidden"
              animate="show"
              className="h-max w-[42%] pr-4"
            >
              <Right />
            </motion.div>

          </div>
        </motion.div>

        {/* ================= MOBILE HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`flex md:hidden items-center justify-between px-4 h-20 transition ${
            isAtTop ? "bg-color1" : "bg-white shadow-md"
          }`}
        >
          <Link href={header?.href || "/"}>
            <Image
              src={isAtTop ? logo2 : logo}
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <motion.button
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <VscChromeClose className={`text-3xl ${isAtTop ? "text-white" : "text-black"}`} />
            ) : (
              <IoMenu className={`text-3xl ${isAtTop ? "text-white" : "text-black"}`} />
            )}
          </motion.button>
        </motion.div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={slideIn("left", "tween", 0, 0.35)}
              initial="hidden"
              animate="show"
              exit={{ x: "-100%", transition: { duration: 0.3 } }}
              className={`fixed top-20 left-0 h-screen w-full md:hidden ${
                isAtTop ? "bg-black" : "bg-white"
              }`}
            >
              <MenuMobile
                onTop={isAtTop}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                onItemClick={() => setIsMobileMenuOpen(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </header>
    </>
  );
};

export default Header;

function Right() {
  const cartCount = 0;

  const socialLinks = [
    { href: "https://facebook.com", icon: <FaFacebookF /> },
    { href: "https://x.com",        icon: <FaXTwitter /> },
    { href: "https://linkedin.com", icon: <FaLinkedinIn /> },
    { href: "https://instagram.com",icon: <FaInstagram /> },
  ];

  return (
    <motion.div
      variants={staggerContainer(0.08, 0.3)}
      initial="hidden"
      animate="show"
      className="flex items-center gap-3 justify-between"
    >
      {/* ── SOCIAL ICONS ── */}
      <div className="flex items-center gap-3">
        {socialLinks.map(({ href, icon }, i) => (
          <motion.div
            key={href}
            variants={fadeIn("down", "tween", 0.3 + i * 0.08, 0.4)}
          >
            <Link
              href={href}
              target="_blank"
              className="text-color1 hover:text-color2 transition-colors duration-200 text-lg block"
            >
              {icon}
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeIn("down", "tween", 0.6, 0.4)}
        className="w-px h-6 bg-gray-300"
      />

      {/* ── CALL & EMAIL ── */}
      <motion.div
        variants={fadeIn("down", "tween", 0.65, 0.5)}
        className="flex items-center gap-5"
      >
        <a
          href="tel:+911234567890"
          className="flex items-center gap-2 text-color1 hover:text-color2 transition-colors duration-200"
        >
          <FaPhone className="text-lg" />
          <span className="text-base">+91 12345 67890</span>
        </a>
        
        <a  href="mailto:hello@example.com"
          className="flex items-center gap-2 text-color1 hover:text-color2 transition-colors duration-200"
        >
          <FaEnvelope className="text-lg" />
          <span className="text-base">hello@example.com</span>
        </a>
      </motion.div>

      <motion.div
        variants={fadeIn("down", "tween", 0.8, 0.4)}
        className="w-px h-6 bg-gray-300"
      />

      {/* ── CART ── */}
      <motion.div
        variants={fadeIn("down", "tween", 0.85, 0.4)}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          href="/cart"
          className="relative text-color1 hover:text-color2 transition-colors duration-200 text-lg block"
        >
          <FaShoppingCart />
          <span className="absolute -top-2 -right-2 w-[16px] h-[16px] rounded-full bg-[#5B9B2A] text-white text-[9px] font-medium flex items-center justify-center">
            {cartCount}
          </span>
        </Link>
      </motion.div>

    </motion.div>
  );
}