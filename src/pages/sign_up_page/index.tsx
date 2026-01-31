import { useState } from "react";
import { Button } from "../../shared/components/Button";
import { Input } from "../../shared/components/Input";
import { Text, Label } from "../../shared/components/Text";
import { Image } from "../../shared/components/Image";
import logo from "../../assets/images/logo new.png";
import { Link } from "@tanstack/react-router";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }
    console.log("Sign up:", formData);
    // TODO: Implement sign up logic
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#F5F5F7] font-jakarta py-8">
      <div className="w-full max-w-md px-4">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src={logo}
            className="w-[100px] h-[100px] rounded-lg object-cover"
            alt="logo"
          />
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <Text
              text="Đăng ký"
              className="text-3xl font-bold text-gray-900 mb-2"
            />
            <Text
              text="Tạo tài khoản mới để bắt đầu"
              className="text-gray-600"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Input */}
            <div>
              <Label
                text="Họ và tên"
                required
                className="block mb-2"
              />
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Nhập họ và tên"
                value={formData.username}
                onChange={handleChange}
                width="100%"
                height="48px"
                className="w-full"
              />
            </div>

            {/* Email Input */}
            <div>
              <Label
                text="Email"
                required
                className="block mb-2"
              />
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Nhập email của bạn"
                value={formData.email}
                onChange={handleChange}
                width="100%"
                height="48px"
                className="w-full"
              />
            </div>

            {/* Phone Input */}
            <div>
              <Label
                text="Số điện thoại"
                required
                className="block mb-2"
              />
              <Input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Nhập số điện thoại"
                value={formData.phone}
                onChange={handleChange}
                width="100%"
                height="48px"
                className="w-full"
              />
            </div>

            {/* Password Input */}
            <div>
              <Label
                text="Mật khẩu"
                required
                className="block mb-2"
              />
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Nhập mật khẩu (tối thiểu 6 ký tự)"
                value={formData.password}
                onChange={handleChange}
                width="100%"
                height="48px"
                className="w-full"
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <Label
                text="Xác nhận mật khẩu"
                required
                className="block mb-2"
              />
              <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Nhập lại mật khẩu"
                value={formData.confirmPassword}
                onChange={handleChange}
                width="100%"
                height="48px"
                className="w-full"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 mr-2"
                required
              />
              <Label
                text={
                  <>
                    Tôi đồng ý với{" "}
                    <a
                      href="#"
                      className="text-[#D39864] hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        // TODO: Navigate to terms page
                      }}
                    >
                      Điều khoản sử dụng
                    </a>{" "}
                    và{" "}
                    <a
                      href="#"
                      className="text-[#D39864] hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        // TODO: Navigate to privacy page
                      }}
                    >
                      Chính sách bảo mật
                    </a>
                  </>
                }
                className="text-sm text-gray-600"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full bg-[#D39864]! hover:bg-[#BC683A]! text-white font-semibold mt-4"
            >
              Đăng ký
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <Text
              text="hoặc"
              className="px-4 text-gray-500 text-sm"
            />
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <Text
              text="Đã có tài khoản? "
              className="text-gray-600 inline"
            />
            <Link
              to="/sign_in"
              className="text-[#D39864] font-semibold hover:underline"
            >
              Đăng nhập ngay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
