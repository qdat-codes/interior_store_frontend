import { Link } from "@tanstack/react-router";

const NotFoundPage = () => {
  return (
    <div className="w-full font-jakarta min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center bg-[#F5F5F7] px-4 py-8">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-[#D39864] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Trang không tìm thấy
          </h2>
          <p className="text-gray-600 mb-8">
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại.
          </p>
          <Link
            to="/"
            className="inline-block bg-[#D39864] text-white px-6 py-3 rounded-md font-medium hover:bg-[#BC683A] transition-colors"
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
