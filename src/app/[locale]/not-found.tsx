import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 min-h-[70vh] flex items-center bg-white">
      <div className="container mx-auto px-5 text-center">
        <h1 className="text-6xl font-extrabold text-slate-900 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-slate-800 mb-6">
          Không tìm thấy trang / Page Not Found
        </h2>
        <p className="text-slate-600 max-w-md mx-auto mb-10 text-lg">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
          <br />
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-orange-700 transition-colors duration-200"
        >
          Quay lại trang chủ / Back to Home
        </Link>
      </div>
    </section>
  );
}
