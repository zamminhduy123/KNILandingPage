import Image from "next/image";
import MoneyBack from '@/public/images/mb.webp';
import { useLocale } from "next-intl";
import Link from "next/link";

export default function LargeTestimonial() {
  const locale = useLocale();

  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <Image
                className="rounded-full"
                src={MoneyBack}
                width={120}
                height={120}
                alt={
                  locale === "en"
                    ? "Commitment to free support until the desired TestAS score is achieved – KNI Education"
                    : "Cam kết hỗ trợ miễn phí đến khi đạt điểm TestAS mong muốn – KNI Education"
                }
              />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {locale === "en" ? (
                <>
                  “We are confident in our quality, promising <em className="italic text-gray-500">free</em> support until you achieve the score you want.”
                </>
              ) : (
                <>
                  “Chúng mình tự tin chất lượng, cam kết hỗ trợ <em className="italic text-gray-500">miễn phí</em> cho đến khi bạn đạt được điểm bạn muốn.”
                </>
              )}
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Khánh Nhật</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <Link className="text-orange-500" href={`/${locale}/consultation/`}>
                CEO at KNI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
