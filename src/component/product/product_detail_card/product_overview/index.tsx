import { Button } from "@/shared/components/Button";
import { Text } from "@/shared/components/Text";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import ProductOverviewDescription from "./product_overview_description";

const ProductOverview = () => {
  const overviews = [
    {
      id: 1,
      title: "Tổng thể",
      description: "Cao 32,7'' Rộng 89'' Sâu 35''",
    },
    {
      id: 2,
      title: "Ghế",
      description: "Cao 18,5'' Rộng 24,8'' Sâu 21,6",
    },
    {
      id: 3,
      title: "Chiều cao lưng - Từ ghế đến đỉnh lưng",
      description: "Cao 18''",
    },
    {
      id: 4,
      title: "Chiều cao tay vịn - Từ sàn đến tay vịn",
      description: "Cao 26''",
    },
    {
      id: 5,
      title: "Tổng trọng lượng sản phẩm",
      description: "114,64 lb.",
    },
    {
      id: 1,
      title: "Chiều cao chân - Từ trên xuống dưới",
      description: "Cao 3,1''",
    },
  ];

  return (
    <>
      <div className="my-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-1 lg:col-span-2">
          <Text
            text="Tổng quan sản phẩm"
            size="text-2xl sm:text-3xl lg:text-4xl"
            color="text-black"
            weight="font-bold"
          />

          <Divider></Divider>
          <div className="flex justify-between items-center py-6">
            <Text
              text="Thông số kĩ thuật"
              size="text-base"
              color="text-black"
              weight="font-medium"
            />
            <Button
              children={""}
              icon={MinusOutlined}
              className="bg-white! text-black! "
            />
          </div>

          {overviews.map((overview) => {
            return (
              <ProductOverviewDescription
                key={overview.id}
                title={overview.title}
                description={overview.description}
              />
            );
          })}

          <Divider></Divider>
          <div className="flex justify-between items-center py-6">
            <Text
              text="Chính sách hậu mãi"
              size="text-base"
              color="text-black"
              weight="font-medium"
            />
            <Button
              children={""}
              icon={PlusOutlined}
              className="bg-white! text-black! "
            />
          </div>

          <Divider></Divider>
          <div className="flex justify-between items-center py-6">
            <Text
              text="Các thông tin khác"
              size="text-base"
              color="text-black"
              weight="font-medium"
            />
            <Button
              children={""}
              icon={PlusOutlined}
              className="bg-white! text-black! "
            />
          </div>
        </div>

        <div className="hidden lg:block col-span-1" />
      </div>
    </>
  );
};

export default ProductOverview;
