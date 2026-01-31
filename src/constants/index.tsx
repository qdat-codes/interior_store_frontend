import type { ColorOption } from "@/types";

/**
 * Danh sách màu sắc sản phẩm với cấu trúc nhất quán
 * Tất cả màu đều có id, name, và hex để dễ dàng sử dụng
 */
export const PRODUCT_COLORS: ColorOption[] = [
  // Màu cơ bản
  { id: "red", name: "Đỏ", hex: "#FF0000" },
  { id: "green", name: "Xanh lá", hex: "#00FF00" },
  { id: "blue", name: "Xanh dương", hex: "#0000FF" },
  { id: "yellow", name: "Vàng", hex: "#FFFF00" },
  { id: "black", name: "Đen", hex: "#000000" },
  { id: "white", name: "Trắng", hex: "#FFFFFF" },
  { id: "gray", name: "Xám", hex: "#808080" },
  { id: "brown", name: "Nâu", hex: "#8B4513" },

  // Màu nâu và tông đất
  { id: "brown-light", name: "Nâu nhạt", hex: "#D2B48C" },
  { id: "brown-dark", name: "Nâu đậm", hex: "#654321" },
  { id: "sienna", name: "Nâu đất", hex: "#A0522D" },

  // Màu đỏ và hồng
  { id: "red-dark", name: "Đỏ đậm", hex: "#8B0000" },
  { id: "red-light", name: "Đỏ nhạt", hex: "#FF6B6B" },
  { id: "pink", name: "Hồng", hex: "#FFC0CB" },
  { id: "rose", name: "Hồng đào", hex: "#FF69B4" },
  { id: "coral", name: "San hô", hex: "#FF7F50" },
  { id: "burgundy", name: "Đỏ rượu", hex: "#800020" },

  // Màu xanh lá
  { id: "green-light", name: "Xanh lá nhạt", hex: "#90EE90" },
  { id: "green-dark", name: "Xanh lá đậm", hex: "#006400" },
  { id: "green-forest", name: "Xanh rừng", hex: "#228B22" },
  { id: "green-mint", name: "Xanh bạc hà", hex: "#98FB98" },
  { id: "green-olive", name: "Xanh ô liu", hex: "#808000" },
  { id: "green-sage", name: "Xanh xám", hex: "#9CAF88" },

  // Màu xanh dương
  { id: "blue-dark", name: "Xanh dương đậm", hex: "#00008B" },
  { id: "blue-sky", name: "Xanh trời", hex: "#87CEEB" },
  { id: "blue-navy", name: "Xanh navy", hex: "#000080" },
  { id: "blue-teal", name: "Xanh ngọc", hex: "#008080" },
  { id: "blue-cyan", name: "Xanh lơ", hex: "#00FFFF" },
  { id: "blue-steel", name: "Xanh thép", hex: "#4682B4" },

  // Màu vàng và cam
  { id: "yellow-gold", name: "Vàng gold", hex: "#D39864" },
  { id: "yellow-cream", name: "Vàng kem", hex: "#FFFDD0" },
  { id: "orange", name: "Cam", hex: "#FFA500" },
  { id: "orange-dark", name: "Cam đậm", hex: "#FF8C00" },
  { id: "amber", name: "Hổ phách", hex: "#FFBF00" },
  { id: "bronze", name: "Đồng", hex: "#CD7F32" },

  // Màu xám
  { id: "gray-dark", name: "Xám đậm", hex: "#696969" },
  { id: "gray-light", name: "Xám nhạt", hex: "#D3D3D3" },
  { id: "gray-silver", name: "Bạc", hex: "#C0C0C0" },
  { id: "charcoal", name: "Than", hex: "#36454F" },
  { id: "slate", name: "Xám xanh", hex: "#708090" },

  // Màu trung tính và pastel
  { id: "beige", name: "Be", hex: "#F5F5DC" },
  { id: "ivory", name: "Ngà", hex: "#FFFFF0" },
  { id: "off-white", name: "Trắng ngà", hex: "#FAFAFA" },
  { id: "taupe", name: "Nâu xám", hex: "#8B8589" },
  { id: "mauve", name: "Tím nhạt", hex: "#E0B0FF" },
  { id: "lavender", name: "Oải hương", hex: "#E6E6FA" },

  // Màu tím
  { id: "purple", name: "Tím", hex: "#800080" },
  { id: "purple-dark", name: "Tím đậm", hex: "#4B0082" },
  { id: "purple-light", name: "Tím nhạt", hex: "#DDA0DD" },
  { id: "violet", name: "Tím hoa cà", hex: "#8A2BE2" },

  // Màu đặc biệt
  { id: "copper", name: "Đồng đỏ", hex: "#B87333" },
  { id: "mahogany", name: "Gỗ gụ", hex: "#C04000" },
  { id: "walnut", name: "Gỗ óc chó", hex: "#773F1A" },
];


// nav header 
export const NAV_HEADER = [
  {
    id: 1,
    tab: "p",
    content: "Trang chủ",
    onclick: "/",
  },
  {
    id: 2,
    tab: "Select",
    content: "Sản phẩm",
    option: [
      { label: "Bàn", value: "ban" },
      { label: "Ghế", value: "ghe" },
      { label: "Tủ", value: "tu" },
    ],
  },
  {
    id: 3,
    tab: "p",
    content: "Bộ sưu tập",
    onclick: "",
  },
  {
    id: 4,
    tab: "Select",
    content: "Tư vấn",
    option: [
      { label: "Decor", value: "decor" },
      { label: "Nội thất", value: "noithat" },
    ],
  },
  {
    id: 5,
    tab: "p",
    content: "Tin tức",
    onclick: "",
  },
  {
    id: 6,
    tab: "p",
    content: "Hỗ trợ",
    onclick: "",
  },
];

// error messages
export const ERROR_MESSAGES: Record<number, string> = {
  400: "Dữ liệu không hợp lệ. Vui lòng kiểm tra lại.",
  401: "Email hoặc mật khẩu không đúng. Vui lòng thử lại.",
  403: "Bạn không có quyền thực hiện thao tác này.",
  404: "Không tìm thấy tài nguyên. Vui lòng thử lại.",
  409: "Email đã tồn tại. Vui lòng nhập email khác.",
  500: "Lỗi máy chủ. Vui lòng thử lại sau.",
};
