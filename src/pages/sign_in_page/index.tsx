import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../shared/components/Button";
import { Input } from "../../shared/components/Input";
import { Text, Label } from "../../shared/components/Text";
import { Image } from "../../shared/components/Image";
import logo from "../../assets/images/logo new.png";
import { Link, useNavigate } from "@tanstack/react-router";
import { authService } from "@/api/services/auth/auth.service";
import type { ILoginRequest } from "@/types/auth";

const SignInPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginRequest>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: ILoginRequest) => {
    setIsLoading(true);
    setError(null);

    try {
      const credentials: ILoginRequest = {
        email: data.email,
        password: data.password,
      };

      await authService.signIn(credentials);

      // Redirect to home page after successful login
      navigate({ to: "/" });
    } catch (err) {
      // Handle error from API
      const errorMessage = err instanceof Error ? err.message : "Đăng nhập thất bại. Vui lòng thử lại.";
      setError(errorMessage);
      console.error("Sign in error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#F5F5F7] font-jakarta p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src={logo}
              className="w-[80px] h-[80px] rounded-lg object-cover"
              alt="logo"
            />
          </div>

          <div className="text-center mb-6">
            <Text
              text="Chào mừng bạn trở lại!"
              className="text-gray-600"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <Text
                text={error}
                className="text-red-600 text-sm"
              />
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label
                text="Email"
                required
                className="block mb-2"
              />
              <Input
                type="email"
                id="email"
                placeholder="Nhập email của bạn"
                width="100%"
                height="48px"
                className={`w-full ${errors.email ? "border-red-500" : ""}`}
                {...register("email", {
                  required: "Email là bắt buộc",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email không hợp lệ",
                  },
                })}
              />
              {errors.email && (
                <Text
                  text={errors.email.message || ""}
                  className="text-red-500 text-sm mt-1"
                />
              )}
            </div>

            <div>
              <Label
                text="Mật khẩu"
                required
                className="block mb-2"
              />
              <Input
                type="password"
                id="password"
                placeholder="Nhập mật khẩu"
                width="100%"
                height="48px"
                className={`w-full ${errors.password ? "border-red-500" : ""}`}
                {...register("password", {
                  required: "Mật khẩu là bắt buộc",
                  minLength: {
                    value: 6,
                    message: "Mật khẩu phải có ít nhất 6 ký tự",
                  },
                })}
              />
              {errors.password && (
                <Text
                  text={errors.password.message || ""}
                  className="text-red-500 text-sm mt-1"
                />
              )}
            </div>

            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm text-[#D39864] hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  // TODO: Implement forgot password
                }}
              >
                Quên mật khẩu?
              </a>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isLoading}
              className="w-full bg-[#D39864]! hover:bg-[#BC683A]! text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
            </Button>
          </form>

          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <Text
              text="hoặc"
              className="px-4 text-gray-500 text-sm"
            />
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <div className="text-center">
            <Text
              text="Chưa có tài khoản? "
              className="text-gray-600 inline mr-1"
            />
            <Link
              to="/sign_up"
              className="text-[#D39864] font-semibold hover:underline"
            >
              Đăng ký ngay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
