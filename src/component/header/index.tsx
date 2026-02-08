import {
  ArrowRightOutlined,
  CloseOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Icon } from "../../shared/components/Icon";
import { Image } from "../../shared/components/Image";
import { Select } from "../../shared/components/Select";
import { Text } from "../../shared/components/Text";
import { Button } from "../../shared/components/Button";
import logo from "../../assets/images/logo new.png";
import SearchText from "../../shared/components/SearchText";
import { useState } from "react";
import { useForm } from "react-hook-form";
import BadgeCount from "@/shared/components/Badge";
import CustomPopover from "@/shared/components/Popover";
import { Input } from "../../shared/components/Input";
import { Label } from "../../shared/components/Text";
import type {
  ILoginRequest,
  ILoginResponse,
  ISignUpRequest,
} from "@/types/auth";
import { NAV_HEADER } from "@/constants";
import { useNavigate } from "@tanstack/react-router";
import { useLogin, useLogout, useSignUp } from "@/hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";
import { clearError } from "@/store/slices/auth";
import { getErrorMessage } from "@/utils/utils";
import { useGetUser } from "@/hooks/user";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authError = useSelector((state: RootState) => state.auth.error);
  const loginMutation = useLogin();
  const signUpMutation = useSignUp();
  const logoutMutation = useLogout();
  const getUserMutation = useGetUser();
  const [isCheckAdmit, setIsCheckAdmit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"signin" | "signup" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [openMenu, setIsOpenMenu] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const isFormLoading = loginMutation.isPending || signUpMutation.isPending;
  const modalError = error ?? authError;

  const user = useSelector((state: RootState) => state.user.user);
  console.log("user: ", user);
  const currentUser = Array.isArray(user) && user.length > 0 ? user[0] : null;
  console.log("currentUser: ", currentUser);
  const isAdmin = currentUser?.role === "ADMIN";


  // Sign In Form
  const {
    register: registerSignIn,
    handleSubmit: handleSignInSubmit,
    formState: { errors: signInErrors },
    reset: resetSignIn,
  } = useForm<ILoginRequest>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Sign Up Form
  const {
    register: registerSignUp,
    handleSubmit: handleSignUpSubmit,
    formState: { errors: signUpErrors },
    watch,
    reset: resetSignUp,
  } = useForm<ISignUpRequest>({
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const watchPassword = watch("password");

  const handleOpenMenu = () => {
    setIsOpenMenu(!openMenu);
  };

  const handleOpenModal = (type: "signin" | "signup") => {
    setModalType(type);
    setIsModalOpen(true);
    handleOpenPopup();
  };

  const handleOpenPopup = () => {
    setIsOpenPopup(!isOpenPopup);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalType(null);
    setError(null);
    dispatch(clearError());
    // Reset form data
    resetSignIn();
    resetSignUp();
  };

  const onSignInSubmit = (data: ILoginRequest) => {
    if (loginMutation.isPending) return;
    dispatch(clearError());
    loginMutation.mutate(data, {
      onSuccess: (response: ILoginResponse) => {
        getUserMutation.mutate(response.user._id);
        handleCloseModal();
        navigate({ to: "/" });
      },
      onError: (error) => {
        setError(
          getErrorMessage(error, "Đăng nhập thất bại. Vui lòng thử lại."),
        );
      },
    });
  };

  const onSignUpSubmit = (data: ISignUpRequest) => {
    if (signUpMutation.isPending) return;
    dispatch(clearError());
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...signUpData } = data;
    signUpMutation.mutate(signUpData as ISignUpRequest, {
      onSuccess: () => {
        handleCloseModal();
        navigate({ to: "/" });
      },
      onError: (error) => {
        setError(getErrorMessage(error, "Đăng ký thất bại. Vui lòng thử lại."));
      },
    });
  };

  const handleLogout = () => {
    if (logoutMutation.isPending) return;
    logoutMutation.mutate(
      { refreshToken: currentUser?.refreshToken || "" },
      {
        onSuccess: () => {
          setIsOpenPopup(false);
          navigate({ to: "/" });
        },
      },
    );
  };

  // Content khi CHƯA đăng nhập
  const contentGuest = (
    <div className="flex flex-col gap-2">
      <div onClick={() => handleOpenModal("signin")}>
        <Text
          text="Đăng nhập"
          className="text-black cursor-pointer hover:text-[#D39864]"
        />
      </div>
      <div onClick={() => handleOpenModal("signup")}>
        <Text
          text="Đăng ký"
          className="text-black cursor-pointer hover:text-[#D39864]"
        />
      </div>
    </div>
  );

  // Content khi ĐÃ đăng nhập
  const contentLoggedIn = (
    <div className="flex flex-col gap-2 min-w-[150px]">
      {/* Thông tin user */}
      <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
        <img
          src={currentUser?.avatar || "/default-avatar.png"}
          alt="avatar"
          className="w-8 h-8 rounded-full object-cover"
        />
        <Text
          text={currentUser?.username || "User"}
          className="text-black font-medium"
        />
      </div>

      {/* Menu items */}
      <div
        onClick={() => {
          setIsOpenPopup(false);
          navigate({ to: "/order" });
        }}
        className="cursor-pointer hover:text-[#D39864]"
      >
        <Text text="Đơn hàng" className="text-black hover:text-[#D39864]" />
      </div>

      {/* TODO: Thêm route /account khi có */}
      <div
        onClick={() => {
          setIsOpenPopup(false);
          // navigate({ to: "/account" });
        }}
        className="cursor-pointer hover:text-[#D39864]"
      >
        <Text text="Tài khoản" className="text-black hover:text-[#D39864]" />
      </div>

      {/* Chỉ hiển thị nếu là Admin */}
      {isAdmin && (
        <div
          onClick={() => {
            setIsOpenPopup(false);
            navigate({ to: "/admin" });
          }}
          className="cursor-pointer hover:text-[#D39864]"
        >
          <Text text="Quản lý" className="text-black hover:text-[#D39864]" />
        </div>
      )}

      {/* Đăng xuất */}
      <div
        onClick={handleLogout}
        className="cursor-pointer pt-2 border-t border-gray-200"
      >
        <Text text="Đăng xuất" className="text-red-500 hover:text-red-600" />
      </div>
    </div>
  );

  // Chọn content dựa vào trạng thái đăng nhập
  const contentUser = currentUser ? contentLoggedIn : contentGuest;

  return (
    <>
      <div className=" w-full bg-[url(/images/background-image.jpg)] bg-no-repeat bg-cover">
        <header className="lg:mx-[165px] lg:pt-6 lg:flex lg:justify-between lg:items-center mx-4 md:mx-16">
          {/* logo  */}
          <div className="grid place-items-center pt-6">
            <Image
              src={logo}
              className="w-[85px] h-[85px] md:w-[100px] md:h-[100px] lg:w-[71px] lg:h-[71px] rounded-lg cursor-pointer object-cover transition-transform hover:scale-105 active:scale-95 duration-300"
              alt="logo page"
            />
          </div>

          <div className="flex lg:hidden justify-center items-center md:space-x-6 md:mt-6 md:mb-[81px] mt-4 space-x-2.5 mb-[125px]">
            <Icon
              component={MenuOutlined}
              className="text-[#BC683A]! bg-[#F3E5D1] rounded-lg w-11 h-8"
              onClick={handleOpenMenu}
            />

            <SearchText
              placeholder="Tìm kiếm...."
              className="md:w-full! w-[210px]!"
            />

            <CustomPopover
              open={isOpenPopup}
              content={contentUser}
              placement="bottomRight"
            >
              <span onClick={() => setIsOpenPopup(!isOpenPopup)}>
                {currentUser ? (
                  <img
                    src={currentUser.avatar || "/default-avatar.png"}
                    alt="avatar"
                    className="w-8 h-8 rounded-full object-cover border-2 border-white cursor-pointer"
                  />
                ) : (
                  <Icon
                    size={"md"}
                    component={UserOutlined}
                    className="text-white"
                  />
                )}
              </span>
            </CustomPopover>

            {currentUser && <BadgeCount
              count={10}
              children={
                <Icon
                  size={"md"}
                  component={ShoppingCartOutlined}
                  className="text-white "
                  onClick={() => navigate({ to: "/cart" })}
                />
              }
            />}
          </div>

          {/* nav */}
          <div className="lg:flex lg:justify-between lg:items-center hidden lg:space-x-[58.6px] lg:text-[16px] text-[#FFFFFF] lg:font-medium ">
            {NAV_HEADER.map((nav, index) => {
              const isLastItem = index === NAV_HEADER.length - 1;

              return (
                <ul key={nav.id}>
                  <li className="transition-transform hover:scale-105 active:scale-95 duration-300">
                    {nav.tab === "p" && (
                      <a
                        href={nav.onclick}
                        className={`cursor-pointer ${isLastItem ? "border-r-2 border-white lg:pr-6" : " "
                          }`}
                      >
                        {nav.content}
                      </a>
                    )}

                    {nav.tab === "Select" && (
                      <Select
                        placeholder={nav.content}
                        options={nav.option || []}
                        onChange={(e) => console.log("Hover select: ", e)}
                        trigger="hover"
                        variant="default"
                      />
                    )}
                  </li>
                </ul>
              );
            })}
          </div>

          {/* desktop menu */}
          <div className="lg:flex lg:justify-between lg:items-center hidden lg:space-x-6">
            <Icon
              size={"md"}
              component={SearchOutlined}
              className="text-white "
              onClick={() => { }}
            />

            <CustomPopover
              open={isOpenPopup}
              content={contentUser}
              placement="bottomRight"
            >
              <span onClick={() => setIsOpenPopup(!isOpenPopup)}>
                {currentUser ? (
                  <img
                    src={currentUser.avatar || "/default-avatar.png"}
                    alt="avatar"
                    className="w-8 h-8 rounded-full object-cover border-2 border-white cursor-pointer"
                  />
                ) : (
                  <Icon
                    size={"md"}
                    component={UserOutlined}
                    className="text-white"
                  />
                )}
              </span>
            </CustomPopover>

            {
              currentUser && <BadgeCount
                count={10}
                children={
                  <Icon
                    size={"md"}
                    component={ShoppingCartOutlined}
                    className="text-white "
                    onClick={() => { }}
                  />
                }
              />}

          </div>
        </header>

        <div className="flex flex-col justify-center items-center lg:mt-[155px] w-auto text-white space-y-3 pb-64">
          <Text
            text={"Biến không gian sống của bạn thành tổ ấm hoàn hảo"}
            className="lg:w-[686px] text-center md:w-[429px] w-[343px]"
            weight="lg:font-bold font-semibold"
            size="lg:text-[48px] md:text-[30px] text-[24px]"
            color="lg:!text-white"
          />

          <Text
            text={"Nội thất tinh tế, phù hợp mọi phong cách sống"}
            weight="font-medium"
            color="lg:!text-white"
            size="lg:text-[20px] text-[12px]"
            className="md:-mt-3 text-center"
          />

          <Button
            children={"Khám phá ngay"}
            className="lg:mt-3 bg-[#D39864]! transition-transform ease-in-out duration-300 hover:scale-105 active:scale-95"
            icon={ArrowRightOutlined}
            iconPosition="right"
          ></Button>
        </div>
      </div>

      {openMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={handleOpenMenu}
        ></div>
      )}

      {/* mobile menu sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[75%] md:w-[50%] bg-white z-50 transform transition-transform duration-500 ease-in-out lg:hidden ${openMenu ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-end items-center p-6 border-b">
          <Icon
            component={CloseOutlined}
            className="text-gray-800 cursor-pointer"
            onClick={handleOpenMenu}
          />
        </div>

        <ul className="space-y-4 mt-6">
          {NAV_HEADER.map((nav) => (
            <li key={nav.id} className="border-b border-gray-200 pb-4">
              {nav.tab === "p" && (
                <a href={nav.onclick} className="cursor-pointer pl-6">
                  {nav.content}
                </a>
              )}

              {nav.tab === "Select" && (
                <Select
                  placeholder={nav.content}
                  options={nav.option || []}
                  onChange={(e) => console.log("Hover select: ", e)}
                  className="pl-6"
                ></Select>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Sign In / Sign Up Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <Text
                text={modalType === "signin" ? "Đăng nhập" : "Đăng ký"}
                className="text-2xl font-bold text-gray-900"
              />
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <CloseOutlined style={{ fontSize: 20 }} />
              </button>
            </div>

            <div className="p-6">
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <Image
                  src={logo}
                  className="w-[80px] h-[80px] rounded-lg object-cover"
                  alt="logo"
                />
              </div>

              {modalType === "signin" ? (
                <>
                  <div className="text-center mb-6">
                    <Text
                      text="Chào mừng bạn trở lại!"
                      className="text-gray-600"
                    />
                  </div>

                  <form
                    onSubmit={handleSignInSubmit(onSignInSubmit)}
                    className="space-y-4"
                  >
                    <div>
                      <Label text="Email" required className="block mb-2" />
                      <Input
                        type="email"
                        id="email"
                        placeholder="Nhập email của bạn"
                        width="100%"
                        height="48px"
                        className={`w-full ${signInErrors.email ? "border-red-500" : ""}`}
                        {...registerSignIn("email", {
                          required: "Vui lòng nhập Email",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Email không hợp lệ",
                          },
                        })}
                      />
                      {signInErrors.email && (
                        <Text
                          text={signInErrors.email.message || ""}
                          className="text-red-500 text-sm mt-1"
                        />
                      )}
                    </div>

                    <div>
                      <Label text="Mật khẩu" required className="block mb-2" />
                      <Input
                        type="password"
                        id="password"
                        placeholder="Nhập mật khẩu"
                        width="100%"
                        height="48px"
                        className={`w-full ${signInErrors.password ? "border-red-500" : ""}`}
                        {...registerSignIn("password", {
                          required: "Vui lòng nhập Mật khẩu ",
                          minLength: {
                            value: 6,
                            message: "Mật khẩu phải có ít nhất 6 ký tự",
                          },
                        })}
                      />
                      {signInErrors.password && (
                        <Text
                          text={signInErrors.password.message || ""}
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
                      disabled={isFormLoading}
                      className="w-full bg-[#D39864]! hover:bg-[#BC683A]! text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isFormLoading ? "Đang đăng nhập..." : "Đăng nhập"}
                    </Button>
                  </form>

                  {/* Error Message */}
                  {modalError && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <Text
                        text={modalError}
                        className="text-red-600 text-sm"
                      />
                    </div>
                  )}

                  <div className="my-6 flex items-center">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <Text text="hoặc" className="px-4 text-gray-500 text-sm" />
                    <div className="flex-1 border-t border-gray-300"></div>
                  </div>

                  <div className="text-center">
                    <Text
                      text="Chưa có tài khoản? "
                      className="text-gray-600 inline mr-1"
                    />
                    <button
                      onClick={() => setModalType("signup")}
                      className="text-[#D39864] font-semibold hover:underline"
                    >
                      Đăng ký ngay
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <Text
                      text="Tạo tài khoản mới để bắt đầu"
                      className="text-gray-600"
                    />
                  </div>

                  <form
                    onSubmit={handleSignUpSubmit(onSignUpSubmit)}
                    noValidate
                    className="space-y-4"
                  >
                    <div>
                      <Label text="Họ và tên" required className="block mb-2" />
                      <Input
                        type="text"
                        id="username"
                        placeholder="Nhập họ và tên"
                        width="100%"
                        height="48px"
                        className={`w-full ${signUpErrors.username ? "border-red-500" : ""}`}
                        {...registerSignUp("username", {
                          required: "Vui lòng nhập họ và tên ",
                          minLength: {
                            value: 2,
                            message: "Họ và tên phải có ít nhất 2 ký tự",
                          },
                        })}
                      />
                      {signUpErrors.username && (
                        <Text
                          text={signUpErrors.username.message || ""}
                          className="text-red-500 text-sm mt-1"
                        />
                      )}
                    </div>
                    <div>
                      <Label text="Email" required className="block mb-2" />
                      <Input
                        type="email"
                        id="email"
                        placeholder="Nhập email của bạn"
                        width="100%"
                        height="48px"
                        className={`w-full ${signUpErrors.email ? "border-red-500" : ""}`}
                        {...registerSignUp("email", {
                          required: "Vui lòng nhập email của bạn ",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Email không hợp lệ",
                          },
                        })}
                      />
                      {signUpErrors.email && (
                        <Text
                          text={signUpErrors.email.message || ""}
                          className="text-red-500 text-sm mt-1"
                        />
                      )}
                    </div>
                    <div>
                      <Label
                        text="Số điện thoại"
                        required
                        className="block mb-2"
                      />
                      <Input
                        type="tel"
                        id="phone"
                        placeholder="Nhập số điện thoại"
                        width="100%"
                        height="48px"
                        className={`w-full ${signUpErrors.phone ? "border-red-500" : ""}`}
                        {...registerSignUp("phone", {
                          required: "Vui lòng nhập số điện thoại của bạn ",
                          pattern: {
                            value: /^[0-9]{10,11}$/,
                            message: "Số điện thoại không hợp lệ",
                          },
                        })}
                      />
                      {signUpErrors.phone && (
                        <Text
                          text={signUpErrors.phone.message || ""}
                          className="text-red-500 text-sm mt-1"
                        />
                      )}
                    </div>
                    <div>
                      <Label text="Mật khẩu" required className="block mb-2" />
                      <Input
                        type="password"
                        id="password"
                        placeholder="Nhập mật khẩu (tối thiểu 6 ký tự)"
                        width="100%"
                        height="48px"
                        className={`w-full ${signUpErrors.password ? "border-red-500" : ""}`}
                        {...registerSignUp("password", {
                          required: "Vui lòng nhập Mật khẩu ",
                          minLength: {
                            value: 6,
                            message: "Mật khẩu phải có ít nhất 6 ký tự",
                          },
                        })}
                      />
                      {signUpErrors.password && (
                        <Text
                          text={signUpErrors.password.message || ""}
                          className="text-red-500 text-sm mt-1"
                        />
                      )}
                    </div>
                    <div>
                      <Label
                        text="Xác nhận mật khẩu"
                        required
                        className="block mb-2"
                      />
                      <Input
                        type="password"
                        id="confirmPassword"
                        placeholder="Nhập lại mật khẩu"
                        width="100%"
                        height="48px"
                        className={`w-full ${signUpErrors.confirmPassword ? "border-red-500" : ""}`}
                        {...registerSignUp("confirmPassword", {
                          required: "Vui lòng nhập lại mật khẩu của bạn ",
                          validate: (value) =>
                            value === watchPassword ||
                            "Mật khẩu xác nhận không khớp",
                        })}
                      />
                      {signUpErrors.confirmPassword && (
                        <Text
                          text={signUpErrors.confirmPassword.message || ""}
                          className="text-red-500 text-sm mt-1"
                        />
                      )}
                    </div>
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="terms"
                        className="mt-1 mr-2"
                        required
                        checked={isCheckAdmit}
                        onChange={() => setIsCheckAdmit(!isCheckAdmit)}
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
                    {/* Error Message */}
                    {modalError && (
                      <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <Text
                          text={modalError}
                          className="text-red-600 text-sm"
                        />
                      </div>
                    )}{" "}
                    {/* Error Message */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isFormLoading || !isCheckAdmit}
                      className="w-full bg-[#D39864]! hover:bg-[#BC683A]! text-white font-semibold mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isFormLoading ? "Đang đăng ký..." : "Đăng ký"}
                    </Button>
                  </form>

                  <div className="my-6 flex items-center">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <Text text="hoặc" className="px-4 text-gray-500 text-sm" />
                    <div className="flex-1 border-t border-gray-300"></div>
                  </div>

                  <div className="text-center">
                    <Text
                      text="Đã có tài khoản? "
                      className="text-gray-600 inline mr-1"
                    />
                    <button
                      onClick={() => setModalType("signin")}
                      className="text-[#D39864] font-semibold hover:underline"
                    >
                      Đăng nhập ngay
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
