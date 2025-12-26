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
      className={`rounded-full border-2 border-white ${className}`}
    />
  );
};

export default Avatar;
