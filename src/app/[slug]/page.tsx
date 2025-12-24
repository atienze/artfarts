import Link from "next/link";
import { notFound } from "next/navigation";
import { albums } from "../../data/albums";
import { Photo, PhotoType } from "../components/photo";
import { SelectedPhotoDialog } from "../components/selected-photo-dialog";

export function generateStaticParams() {
  return albums.map((album) => ({
    slug: album.slug,
  }));
}

export default function AlbumPage({ params }: { params: { slug: string } }) {
  const album = albums.find((a) => a.slug === params.slug);

  if (!album) {
    notFound();
  }

  // 1. GENERATE THE PHOTO LIST
  // (Eventually, you will import real photos here. For now, we still repeat the cover.)
  const photos: PhotoType[] = Array.from({ length: album.photoCount }).map((_, i) => ({
    id: i.toString(),
    src: album.coverImage,
    alt: `${album.title} - Photo ${i + 1}`,
  }));

  return (
    <main className="min-h-screen p-4 md:p-10 max-w-7xl mx-auto">
      
      {/* 2. THE LIGHTBOX (Hidden by default, wakes up when URL has ?selected=...) */}
      <SelectedPhotoDialog photos={photos} />

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <Link 
            href="/" 
            className="text-sm text-gray-500 hover:text-black dark:hover:text-white mb-4 inline-block transition-colors"
          >
            ← Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            {album.title}
          </h1>
          <p className="text-gray-500 mt-2 max-w-lg">
            {album.description}
          </p>
        </div>
        
        <div className="text-right hidden md:block">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
            Year
          </p>
          <p className="text-xl">2025</p>
        </div>
      </div>

      {/* 3. THE GRID */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>

    </main>
  );
}