export type Testimonial = {
  id: string;
  name: string;
  initials: string;
  badge: { vn: string; en: string };
  quote: { vn: string; en: string };
  result: { vn: string; en: string };
  resultSub?: { vn: string; en: string };
  proofImage: string;
  featured: boolean;
  category: string;
};

export const testimonials: Testimonial[] = [
  // ── Featured cards ──────────────────────────────────────────
  {
    id: "minh-ha",
    name: "Minh Hà",
    initials: "MH",
    badge: { vn: "Điểm cao", en: "High Score" },
    quote: {
      vn: "Mình đạt 112 điểm sau 6 tuần học với KNI, vào được VGU với sự tự tin hơn rất nhiều.",
      en: "I scored 112 after 6 weeks with KNI and got into VGU with so much more confidence.",
    },
    result: { vn: "TestAS 112/130 (hộc bổng 25%)", en: "TestAS 112/130 (25% Scholarship)" },
    resultSub: { vn: "Trúng tuyển VGU 2024", en: "Admitted to VGU 2024" },
    proofImage: "/images/reviews/5.webp",
    featured: true,
    category: "highScore",
  },
  {
    id: "thao-quyen",
    name: "Thảo Quyên",
    initials: "TQ",
    badge: { vn: "VGU", en: "VGU" },
    quote: {
      vn: "Lộ trình rõ ràng, học đúng trọng tâm, không mất thời gian vô ích.",
      en: "Clear roadmap, focused learning, no wasted time.",
    },
    result: { vn: "Trúng tuyển VGU 2024", en: "Admitted to VGU 2024" },
    proofImage: "/images/reviews/8.webp",
    featured: true,
    category: "vgu",
  },

  // ── Standard cards ──────────────────────────────────────────
  {
    id: "ngoc-linh",
    name: "Ngọc Linh",
    initials: "NL",
    badge: { vn: "Học bổng", en: "Scholarship" },
    quote: {
      vn: "Nhờ điểm TestAS tốt mình được xét học bổng bán phần ngay năm đầu.",
      en: "Thanks to my TestAS score, I received a partial scholarship in my first year.",
    },
    result: { vn: "Học bổng 50%", en: "50% Scholarship" },
    proofImage: "/images/reviews/3.webp",
    featured: false,
    category: "scholarship",
  },
  {
    id: "hoang-phuc",
    name: "Hoàng Phúc",
    initials: "HP",
    badge: { vn: "Điểm cao", en: "High Score" },
    quote: {
      vn: "Phần Numerical Series mình yếu nhất, KNI cho luyện riêng đến khi chắc tay.",
      en: "Numerical Series was my weakest area — KNI gave me targeted practice until I was confident.",
    },
    result: { vn: "TestAS 108/130", en: "TestAS 108/130" },
    proofImage: "/images/reviews/10.webp",
    featured: false,
    category: "highScore",
  },
  {
    id: "dang-khoa",
    name: "Đăng Khoa",
    initials: "DK",
    badge: { vn: "Feedback", en: "Feedback" },
    quote: {
      vn: "KNI giúp mình tự tin hơn rất nhiều trước ngày thi.",
      en: "KNI helped me feel so much more confident before exam day.",
    },
    result: { vn: "Tự tin & sẵn sàng", en: "Confident & Ready" },
    proofImage: "/images/reviews/15.webp",
    featured: false,
    category: "feedback",
  },
  {
    id: "yen-vy",
    name: "Yến Vy",
    initials: "YV",
    badge: { vn: "VGU", en: "VGU" },
    quote: {
      vn: "Mock test hằng tuần giúp mình quen áp lực phòng thi thật.",
      en: "Weekly mock tests helped me get used to the real exam pressure.",
    },
    result: { vn: "Trúng tuyển VGU 2024", en: "Admitted to VGU 2024" },
    proofImage: "/images/reviews/20.webp",
    featured: false,
    category: "vgu",
  },
];

export const categories = [
  { key: "all" },
  { key: "vgu" },
  { key: "scholarship" },
  { key: "highScore" },
  { key: "feedback" },
] as const;

export const proofWallImages: string[] = [];
for (let i = 1; i <= 22; i++) {
  proofWallImages.push(`/images/reviews/${i}.webp`);
}
