"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import TutorLike from '@/public/images/tutor-like.webp'
import TutorGrad from '@/public/images/tutor-grad.webp'
import TutorSig from '@/public/images/tutor-sig.jpg'
import TestAS from '@/public/images/TestASLogo.png'
import EDU from '@/public/images/VGU.png'
import { IoIosSchool } from "react-icons/io";
import { FaGoogleScholar } from "react-icons/fa6";
import { FcEngineering } from "react-icons/fc";
import { FaCheck } from "react-icons/fa";

import { renderDescriptionWithMultipleHighlights } from '@/src/utils/render-utils'

export default function Tutor() {
  const t = useTranslations("HomePage.tutor");
  const locale = useLocale();

  const listItem = (children: any, ICON : any, iconColor="orange") => {
    return <li className="flex items-center">
        <div className="h-12 min-w-12 flex items-center justify-center">
            <ICON className={`text-${iconColor}-600`} size={24} />
        </div>
        <p className="text-xl text-gray-500">
            {children}
        </p>
    </li>
}

  return (
    <section className="min-h-screen bg-gray-50 snap-center pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Images */}
          <div className="relative order-2 md:order-1 h-full w-full">
            {/* Main Image */}
            <Image
              src={TutorGrad} // Replace with your actual image path
            //   width={300}
              height={550}
              alt={locale === 'en' ? 'TestAS preparation instructor at KNI Education' : 'Giáo viên luyện thi TestAS tại KNI Education'}
              className="rounded-lg shadow-md"
              data-aos="fade-right"
              data-aos-delay="100"
              priority
            />
            {/* Secondary Image (Overlapping) */}
            <Image
              src={TutorLike} // Replace with your actual image path
              width={350}
              height={200}
              alt={locale === 'en' ? 'TestAS student at KNI Education' : 'Học viên TestAS tại KNI Education'}
              className="absolute bottom-0 right-0 shadow-md border-amber-50 border-5"
              data-aos="fade-right"
              data-aos-delay="200"
              priority
            />
            {/* Circular Badge */}
            <div
              className="absolute top-15 right-10 transform bg-white rounded-full p-4 shadow-md"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Image
                src={EDU} // Replace with your actual badge image path
                width={100}
                height={100}
                alt={locale === 'en' ? 'VGU educational partner logo' : 'Giải thưởng giáo dục VGU'}
                className="rounded-full"
                priority
              />
            </div>
          </div>
          {/* Right: Text Content */}
          <div className="order-1 md:order-2">
            {/* Label */}
            <p
              className="text-sm uppercase text-red-600 font-semibold tracking-wider mb-2"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              {t("label")}
            </p>
            {/* Heading */}
            <h2
              className="text-4xl md:text-5xl font-bold text-black mb-6"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {renderDescriptionWithMultipleHighlights(t("title"), ["đồng hành"], 'text-orange-500')}
            </h2>
            {/* Subheading */}
            <h3
              className="text-2xl font-semibold text-gray-800 mb-4"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              {t("subheading")}
            </h3>
            {/* Description (List) */}
            <ul
              className="text-gray-600 mb-6 space-y-2"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              {listItem(t("description.item1"), IoIosSchool)}
              {listItem(t("description.item2"), FaGoogleScholar)}
              {listItem(t("description.item3"), FcEngineering)}
              <li className="flex items-center">
                <div className="h-12 min-w-12 flex items-center justify-center">
                    <Image
                        src={TestAS} // Replace with your actual image path
                        width={25}
                        height={25}
                        alt=""
                        role="presentation"
                        className="rounded-full"
                        priority
                    />
                </div>
                <p className="text-xl text-gray-500">
                    {renderDescriptionWithMultipleHighlights(t("description.item4"), ["125/130"], 'text-orange-500 font-bold')}
                </p>
            </li>
              {listItem(renderDescriptionWithMultipleHighlights(t("description.item5"), ["95%"], 'text-orange-500 font-bold'), FaCheck)}
              
            </ul>
            {/* Highlighted Quote */}
            <blockquote
              className="border-l-4 border-red-600 pl-4 text-gray-600 italic mb-6"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              {t("quote")}
            </blockquote>
            {/* Signature */}
            <div
              className="flex items-center space-x-4"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <Image
                src={TutorSig} // Replace with your actual image path
                width={50}
                height={50}
                alt={locale === 'en' ? "Signature of KNI Education founder – Nhat" : "Chữ ký người sáng lập KNI Education – Nhật"}
                className="rounded-full"
                priority
              />
              <div>
                <p className="text-black font-semibold">{t("signature.name")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}