import Link from "next/link";
import { albums } from "../data/albums";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center max-w-4xl mx-auto px-4">
      
      {/* 1. THE NAME (Stacked on top) */}
      <h1 className="text-gray-400 text-sm md:text-xl font-bold tracking-tight mb-2">
        artfarts23
      </h1>

      {/* 2. THE ALBUMS (Centered loop below) */}
      <nav className="flex flex-wrap justify-center items-center text-xs md:text-xs font-bold tracking-tight leading-tight">
        
        {albums.map((album, index) => (
          <div key={album.id} className="flex items-center">
            
            <Link 
              href={`/${album.slug}`}
              className="underline-offset-2 hover:underline hover:text-purple-600 transition-all duration-200"
            >
              {album.title}
            </Link>

            {/* Add backslash ONLY if it's not the last item */}
            {index < albums.length - 1 && (
              <span className="mx-3 text-gray-300">\</span>
            )}
            
          </div>
        ))}
        
      </nav>
    </div>
  );
}