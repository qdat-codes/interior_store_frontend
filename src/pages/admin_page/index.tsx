import { useState } from "react";
import {
  DashboardOutlined,
  ShoppingOutlined,
  UserOutlined,
  FileTextOutlined,
  SettingOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Icon } from "../../shared/components/Icon";
import { Text, Heading } from "../../shared/components/Text";
import { Button } from "../../shared/components/Button";
import { Image } from "../../shared/components/Image";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import logo from "../../assets/images/logo new.png";

interface DataType {
  key: string;
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: string;
}

const AdminPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Tổng quan", icon: DashboardOutlined },
    { id: "products", label: "Sản phẩm", icon: ShoppingOutlined },
    { id: "orders", label: "Đơn hàng", icon: FileTextOutlined },
    { id: "users", label: "Người dùng", icon: UserOutlined },
    { id: "settings", label: "Cài đặt", icon: SettingOutlined },
  ];

  const statsData = [
    { label: "Tổng đơn hàng", value: "1,234", color: "bg-blue-500" },
    { label: "Doanh thu", value: "2.5 tỷ", color: "bg-green-500" },
    { label: "Sản phẩm", value: "456", color: "bg-purple-500" },
    { label: "Khách hàng", value: "8,901", color: "bg-orange-500" },
  ];

  const productColumns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Danh mục",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (price: number) =>
        new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(price),
    },
    {
      title: "Tồn kho",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            status === "Còn hàng"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {status}
        </span>
      ),
    },
  ];

  const productData: DataType[] = [
    {
      key: "1",
      id: "P001",
      name: "Bàn gỗ cao cấp",
      category: "Bàn",
      price: 5000000,
      stock: 15,
      status: "Còn hàng",
    },
    {
      key: "2",
      id: "P002",
      name: "Ghế sofa da",
      category: "Ghế",
      price: 12000000,
      stock: 8,
      status: "Còn hàng",
    },
    {
      key: "3",
      id: "P003",
      name: "Tủ quần áo",
      category: "Tủ",
      price: 8000000,
      stock: 0,
      status: "Hết hàng",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F5F5F7] font-jakarta flex">
      {/* Sidebar */}
      <div
        className={`bg-white shadow-lg transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        } min-h-screen fixed left-0 top-0 z-10`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          {!collapsed && (
            <Image
              src={logo}
              className="w-12 h-12 rounded-lg object-cover"
              alt="logo"
            />
          )}
          <Icon
            component={collapsed ? MenuUnfoldOutlined : MenuFoldOutlined}
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto cursor-pointer text-gray-700"
          />
        </div>

        {/* Menu Items */}
        <nav className="mt-4">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeMenu === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`flex items-center px-4 py-3 mx-2 rounded-lg cursor-pointer transition-colors ${
                  isActive
                    ? "bg-[#D39864] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <IconComponent
                  style={{ fontSize: 20 }}
                  className={isActive ? "text-white" : "text-gray-700"}
                />
                {!collapsed && (
                  <Text
                    text={item.label}
                    className={`ml-3 font-medium ${
                      isActive ? "text-white" : "text-gray-700"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-4 w-full px-4">
          <div
            className="flex items-center px-4 py-3 mx-2 rounded-lg cursor-pointer text-red-600 hover:bg-red-50 transition-colors"
            onClick={() => {
              // TODO: Implement logout
              console.log("Logout");
            }}
          >
            <LogoutOutlined style={{ fontSize: 20 }} />
            {!collapsed && (
              <Text text="Đăng xuất" className="ml-3 font-medium" />
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          collapsed ? "ml-20" : "ml-64"
        }`}
      >
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="px-6 py-4 flex items-center justify-between">
            <Heading
              level={2}
              text={
                menuItems.find((item) => item.id === activeMenu)?.label ||
                "Dashboard"
              }
              className="text-2xl font-bold text-gray-900"
            />
            <div className="flex items-center gap-4">
              <Icon
                component={BellOutlined}
                className="text-gray-700 cursor-pointer"
              />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D39864] flex items-center justify-center">
                  <UserOutlined style={{ fontSize: 20, color: "white" }} />
                </div>
                <div>
                  <Text text="Admin" className="font-semibold text-gray-900" />
                  <Text
                    text="admin@interiorstore.com"
                    className="text-sm text-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6">
          {activeMenu === "dashboard" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsData.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <Text
                          text={stat.label}
                          className="text-gray-600 text-sm mb-2"
                        />
                        <Heading
                          level={3}
                          text={stat.value}
                          className="text-3xl font-bold text-gray-900"
                        />
                      </div>
                      <div
                        className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}
                      >
                        <DashboardOutlined
                          style={{ fontSize: 24, color: "white" }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Orders Table */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <Heading
                  level={3}
                  text="Đơn hàng gần đây"
                  className="text-xl font-bold text-gray-900 mb-4"
                />
                <Table
                  columns={productColumns}
                  dataSource={productData}
                  pagination={{ pageSize: 5 }}
                />
              </div>
            </div>
          )}

          {activeMenu === "products" && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <Heading
                  level={3}
                  text="Quản lý sản phẩm"
                  className="text-xl font-bold text-gray-900"
                />
                <Button
                  variant="primary"
                  className="bg-[#D39864]! hover:bg-[#BC683A]! text-white"
                >
                  Thêm sản phẩm
                </Button>
              </div>
              <Table
                columns={productColumns}
                dataSource={productData}
                pagination={{ pageSize: 10 }}
              />
            </div>
          )}

          {activeMenu === "orders" && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <Heading
                level={3}
                text="Quản lý đơn hàng"
                className="text-xl font-bold text-gray-900 mb-6"
              />
              <Table
                columns={productColumns}
                dataSource={productData}
                pagination={{ pageSize: 10 }}
              />
            </div>
          )}

          {activeMenu === "users" && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <Heading
                level={3}
                text="Quản lý người dùng"
                className="text-xl font-bold text-gray-900 mb-6"
              />
              <Table
                columns={productColumns}
                dataSource={productData}
                pagination={{ pageSize: 10 }}
              />
            </div>
          )}

          {activeMenu === "settings" && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <Heading
                level={3}
                text="Cài đặt hệ thống"
                className="text-xl font-bold text-gray-900 mb-6"
              />
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <Text
                    text="Cài đặt chung"
                    className="font-semibold text-gray-900 mb-2"
                  />
                  <Text
                    text="Quản lý các cài đặt chung của hệ thống"
                    className="text-gray-600 text-sm"
                  />
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <Text
                    text="Cài đặt thanh toán"
                    className="font-semibold text-gray-900 mb-2"
                  />
                  <Text
                    text="Cấu hình phương thức thanh toán"
                    className="text-gray-600 text-sm"
                  />
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <Text
                    text="Cài đặt vận chuyển"
                    className="font-semibold text-gray-900 mb-2"
                  />
                  <Text
                    text="Quản lý phương thức vận chuyển"
                    className="text-gray-600 text-sm"
                  />
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
