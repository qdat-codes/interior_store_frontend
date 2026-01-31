import { Image } from "@/shared/components/Image";

const PinterestMasonry = ({ images }: { images: string[] }) => {
  return (
    <div className="bg-gray-100">
      <div className="columns-1 md:columns-3 lg:columns-6  gap-6 space-y-4">
        {images?.map((img, index) => (
          <div key={index} className="break-inside-avoid mb-4">
            <div className="overflow-hidden shadow-md bg-white">
              <Image
                src={img}
                alt={`Room ${img}`}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PinterestMasonry;
