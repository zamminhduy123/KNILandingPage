import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  const ogLocale = "vi_VN";
  const title = "Về Nhật – Giáo Viên TestAS VGU 125/130 | KNI Education";
  const desc = "Nhật - Cựu sinh viên VGU MEN, TestAS 125/130, kỹ sư robot ABB. 2 năm kinh nghiệm luyện thi TestAS với 95% học viên đậu.";
  return {
    title,
    description: desc,
    keywords: [
      "Nhật TestAS",
      "giáo viên TestAS",
      "cựu sinh viên VGU",
      "testas 125 130",
      "ABB robotics",
    ],
    alternates: {
      canonical: "https://kni.vn/ve-nhat/",
    },
    openGraph: {
      title,
      description: desc,
      url: "https://kni.vn/ve-nhat/",
      siteName: "KNI Education",
      images: [
        {
          url: "https://kni.vn/images/og-image-mentor.jpg",
          width: 1200,
          height: 630,
          alt: "Nhật - Giáo viên TestAS VGU 125/130 tại KNI Education",
        },
      ],
      locale: ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: ["https://kni.vn/images/twitter-image-mentor.jpg"],
    },
  };
}

export default function MentorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
