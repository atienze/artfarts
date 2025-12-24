import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// 1. Define what a "Photo" looks like in your app
export type PhotoType = {
  id: string;
  src: StaticImageData;
  alt?: string;
};

export const Photo = ({ photo, priority = false }: { photo: PhotoType, priority?: boolean }) => {
  return (
    <Link href={`?selected=${photo.id}`} scroll={false} className="block relative overflow-hidden bg-gray-100 rounded-lg">
      <Image
        src={photo.src}
        alt={photo.alt ?? ""}
        placeholder="blur"
        priority={priority}
        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
      />
    </Link>
  );
};