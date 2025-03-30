"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";
import documentSrc from '@/public/images/documents.jpg'
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

export default function FreeTestAS() {
  const t = useTranslations("FreeTestAS");

  const contactItems = [
    {
      icon: FaPhone, // Replace with your actual icon path
      value: "091-839-1099",
      highlight: true, // Highlight this item with red background
    },
    {
      icon: IoMdMail, // Replace with your actual icon path
      value: "nhat@kni.vn",
    }, 
  ];

  return (
    <>
      {/* Free TestAS Section */}
      <section className="min-h-screen bg-white snap-center py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Content */}
            <div className="order-1">
              <p
                className="text-sm uppercase text-red-600 font-semibold tracking-wider mb-2"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                {t("label")}
              </p>
              <h1
                className="text-4xl md:text-5xl font-bold text-black mb-6"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                {t("title")} <span className="text-red-600">.</span>
              </h1>
              <p
                className="text-gray-600 mb-4 italic"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                &quot;{t("quote")}&quot;
              </p>
              <p
                className="text-gray-600 mb-4"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                {t("description.line1")}
              </p>
              <p
                className="text-gray-600 mb-6"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                {t("description.line2")}
              </p>
              <form className="space-y-4" data-aos="fade-right" data-aos-delay="600">
                <div>
                  <input
                    type="email"
                    placeholder={t("form.email")}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder={t("form.zalo")}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-red-600 text-white uppercase px-6 py-3 rounded-md hover:bg-red-700 transition flex items-center"
                >
                  {t("form.submit")} <span className="ml-2">→</span>
                </button>
              </form>
            </div>
            {/* Right: Image */}
            <div className="order-2">
              <Image
                src={documentSrc} // Replace with your actual image path
                width={500}
                height={500}
                alt="Free TestAS Image"
                className="rounded-lg shadow-md w-full"
                data-aos="fade-left"
                data-aos-delay="100"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}