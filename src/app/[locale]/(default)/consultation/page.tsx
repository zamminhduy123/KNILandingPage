import { useTranslations } from "next-intl";
import Image from "next/image";
import ConsultSrc from '@/public/images/consultant.jpg'
import {setRequestLocale} from 'next-intl/server';
import { use } from "react";
import ConsultationForm from "@/src/components/brevo/consultation-form";

export default function Consultation({ params }: any) {
  const {locale} = use<any>(params);
 
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("Consultation");

  return (
    <section className="min-h-screen bg-white snap-center py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Form */}
          <div className="order-1"               
              data-aos="fade-right"
              data-aos-delay="100">
            {/* <p
              className="text-sm uppercase text-orange-600 font-semibold tracking-wider mb-2"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              {t("label")}
            </p> */}
            <h1
              className="text-3xl md:text-4xl font-bold text-black mb-2"
            >
              {t("title")}{" "}{t("free")}<span className="text-black">.</span>
            </h1>
            <p
              className="text-gray-600 mb-2"
            >
              {t("description.line1")}{" "}{t("description.line2")}{" "}{t("description.line3")}
            </p>
            {/* <p
              className="text-gray-600 mb-4"
              data-aos="fade-right"
              data-aos-delay="400"
            >

            </p> */}
            {/* <p
              className="text-gray-600 mb-4"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              
            </p> */}
            <p
              className="text-[#ff914d] font-bold mb-2"
            >
              {t("description.line4")}
            </p>
            <ConsultationForm/>
            {/* <form className="space-y-4" data-aos="fade-right" data-aos-delay="700">
              <div>
                <input
                  type="text"
                  placeholder={t("form.name")}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder={t("form.zalo")}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t("form.email")}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder={t("form.howDidYouFindUs")}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-orange-600 text-white uppercase px-6 py-3 rounded-md hover:bg-orange-700 transition flex items-center cursor-pointer"
              >
                {t("form.submit")} <span className="ml-2">→</span>
              </button>
            </form> */}
          </div>

          {/* Right: Image */}
          <div className="order-2 flex justify-end">
            <Image
              src={ConsultSrc} // Replace with your actual image path
              width={400}
              height={400}
              alt="Consultation Image"
              className="rounded-lg shadow-md"
              data-aos="fade-left"
              data-aos-delay="100"
              priority
              placeholder="blur"
              blurDataURL={"public/images/consultation_blur.jpg"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}