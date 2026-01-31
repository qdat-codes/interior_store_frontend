import { Image } from "../Image";

const Avatar = ({
  image,
  className,
}: {
  image: string;
  className?: string;
}) => {
  return (
    <Image
      src={image}
      className={`md:w-8 md:h-8 w-7 h-7 -ml-3  rounded-full border-2 border-white ${className}`}
    />
  );
};

export default Avatar;
