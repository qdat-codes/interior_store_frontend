import { Carousel } from "../carousel";

const CollectionProduct = () => {
  const images = [
    {
      id: 1,
      title: "Phòng Khách Hiện Đại",
      description: "Thiết kế tối giản với màu sắc nhẹ nhàng",
      image: "/src/assets/images/products/slide_1.jpg",
    },
    {
      id: 2,
      title: "Phòng Ngủ Ấm Cúng",
      description: "Không gian thư giãn hoàn hảo",
      image: "/src/assets/images/products/slide_2.jpg",
    },
    {
      id: 3,
      title: "Góc Đọc Sách",
      description: "Nơi lý tưởng để thư giãn",
      image: "/src/assets/images/products/slide_3.jpg",
    },
    {
      id: 4,
      title: "Phòng Ăn Sang Trọng",
      description: "Không gian sum họp gia đình",
      image: "/src/assets/images/products/slide_4.jpg",
    },
  ];
  return (
    <div className="bg-[#E1BA90] lg:pb-[50px] overflow-x-hidden">
      <Carousel images={images.map((image) => image.image)} />
    </div>
  );
};

export default CollectionProduct;
