"use client";
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { FaWhatsapp, FaUser, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobeAsia, FaPaperPlane, FaTimes } from 'react-icons/fa';
import Image from "next/image";
import { MdMessage } from 'react-icons/md';
import { GiAirplaneDeparture } from 'react-icons/gi';
import { logo, logo2, pop } from '@/assets';

const WHATSAPP_NUMBER = '919818929900';
const WHATSAPP_MESSAGE = "Hi Travelista Tours! I'd like to know more about your travel packages.";

export default function Popups() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', place: '', state: '', message: ''
  });

  useEffect(() => {
    const t = setTimeout(() => setIsFormOpen(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsFormOpen(false);
      setForm({ name: '', phone: '', email: '', place: '', state: '', message: '' });
    }, 2200);
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="relative">
     

      {/* WhatsApp floating button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-2 w-[58px] h-[58px] rounded-full bg-[#25D366] hover:bg-[#1ebd5a] text-white flex items-center justify-center shadow-lg hover:shadow-[0_8px_24px_rgba(37,211,102,0.55)] transition-all z-[60]"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Side tab trigger */}
      <button
        onClick={() => setIsFormOpen(true)}
        className="fixed top-1/2 -right-[100px] -translate-y-1/2 -rotate-90 origin-center bg-gradient-to-r from-sky-800 to-sky-500 text-white font-semibold text-sm tracking-wide px-5 py-3 rounded-t-lg flex items-center gap-2 shadow-lg z-[55] hover:brightness-110 transition-all"
      >
        <GiAirplaneDeparture size={18} className="rotate-90" />
        Customize Your Package
      </button>

      {/* Popup Overlay */}
      {isFormOpen && (
        <div
          onClick={() => setIsFormOpen(false)}
          className="fixed inset-0 bg-indigo-950/50 backdrop-blur-sm flex items-center justify-center z-[70] p-5"
        >
                  <div className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative" onClick={(e) => e.stopPropagation()}>
            
            {/* Left Side */}
            <div className="w-full md:w-[40%] relative">
              <Image src={pop} alt="bg" fill className="object-cover opacity-80 " />
              <div className="relative  flex flex-col justify-between bg-gradient-to-t from-sky-900/70 via-transparent to-white/80  h-full p-6 min-h-72">
                <Image src={logo} alt="logo" className="w-28 " />
               
               <div className='space-y-4'>
                 <h3 className="text-2xl font-bold font1 text-sky-200">Plan Your Next Adventure</h3>
                <p className="text-sm text-white leading-relaxed">Let us handle the details while you focus on making memories. Get a customized quote today!</p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-[60%] p-8 bg-gray-50">
              <button onClick={() => setIsFormOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black">
                <FaTimes size={20} />
              </button>

              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 text-2xl">✓</div>
                  <h3 className="text-xl font-bold">Request Sent!</h3>
                  <p>Our travel expert will contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-800">Customize Your Trip</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase">Name</label>
                      <input name="name" required onChange={handleChange} className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-sky-200" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase">Phone</label>
                      <input name="phone" required onChange={handleChange} className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-sky-200" placeholder="+91 00000 00000" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
                    <input name="email" required type="email" onChange={handleChange} className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-sky-200" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Message</label>
                    <textarea name="message" rows={3} onChange={handleChange} className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-sky-200" placeholder="Tell us where you want to go..." />
                  </div>

                  <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-amber-500/30">
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}