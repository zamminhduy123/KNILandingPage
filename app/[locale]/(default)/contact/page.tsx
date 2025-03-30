"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";
import documentSrc from "@/public/images/documents.jpg";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Contact() {
  const t = useTranslations("Contact");

  const contactItems = [
    {
      icon: FaPhone, // Replace with your actual icon path
      value: "091-839-1099",
      label: "Điện thoại",
      highlight: true, // Highlight this item with red background
    },
    {
      icon: IoMdMail, // Replace with your actual icon path
      value: "nhat@kni.vn",
      label: "Email",
    },
  ];

  return (
    <section id="contact" className="min-h-[80vh] bg-white snap-center pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-black mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("title")}
          </h2>
          <p
            className="text-2xl md:text-xl text-gray-500 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("description")}
          </p>
        </div>
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactItems.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center"
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <step.icon size={48} className="mx-auto mb-4 text-gray-500" />
              <h3 className="text-xl font-bold text-black mb-2">
                {step.value}
              </h3>
              <p>{step.label}</p>
            </div>
          ))}
          <div
            key={"3"}
            className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col justify-center "
            data-aos="fade-up"
            data-aos-delay={`${(3 + 1) * 100}`}
          >
            <div className="flex items-center">
              <AiFillTikTok
                size={48}
                className="mx-auto mb-4 text-gray-500 hover:scale-110 transition-all cursor-pointer"
                style={{ transitionDuration: "200ms" }}
              />
              <FaSquareFacebook
                size={48}
                className="mx-auto mb-4 text-gray-500 hover:scale-110 transition-all cursor-pointer"
                style={{ transitionDuration: "200ms" }}
              />
              <FaSquareInstagram
                size={48}
                className="mx-auto mb-4 text-gray-500 hover:scale-110 transition-all cursor-pointer"
                style={{ transitionDuration: "200ms" }}
              />
            </div>
            <p>{t("SocialMedia")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
