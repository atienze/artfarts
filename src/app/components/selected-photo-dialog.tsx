"use client";

import * as React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Cross1Icon, ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { PhotoType } from "./photo"; // Import the type we made above

// Helper for the buttons
const IconButton = (props: JSX.IntrinsicElements["button"]) => (
  <button {...props} className={`p-2 hover:bg-white/10 rounded-full transition-colors ${props.className}`} />
);

export const SelectedPhotoDialog = ({ photos }: { photos: Array<PhotoType> }) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const selectedId = params.get("selected"); // The ID from the URL

  // Find the active photo
  const selectedIndex = photos.findIndex((p) => p.id === selectedId);
  const selectedPhoto = photos[selectedIndex];

  // Navigation Logic
  const close = () => {
    const nextParams = new URLSearchParams(params.toString());
    nextParams.delete("selected");
    router.push(`${pathname}?${nextParams}`, { scroll: false });
  };

  const navigate = (direction: "next" | "prev") => {
    const nextParams = new URLSearchParams(params.toString());
    let nextIndex = direction === "next" ? selectedIndex + 1 : selectedIndex - 1;

    // Loop around if we hit the end
    if (nextIndex >= photos.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = photos.length - 1;

    nextParams.set("selected", photos[nextIndex].id);
    router.push(`${pathname}?${nextParams}`, { scroll: false });
  };

  // Keyboard support
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") navigate("next");
      if (e.key === "ArrowLeft") navigate("prev");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]); // Re-bind when index changes

  if (!selectedPhoto) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
      
      {/* Close Button (Top Right) */}
      <div className="absolute top-4 right-4 z-50">
        <IconButton onClick={close}>
          <Cross1Icon className="text-white w-6 h-6" />
        </IconButton>
      </div>

      {/* Main Image */}
      <div className="relative w-full h-full p-4 md:p-10 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={selectedPhoto.src.src} // Access the raw .jpg path
          alt={selectedPhoto.alt ?? ""}
          className="max-h-full max-w-full object-contain shadow-2xl"
        />
      </div>

      {/* Left Arrow */}
      <button onClick={() => navigate("prev")} className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white hover:bg-white/10 rounded-full">
        <ArrowLeftIcon className="w-8 h-8" />
      </button>

      {/* Right Arrow */}
      <button onClick={() => navigate("next")} className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white hover:bg-white/10 rounded-full">
         <ArrowRightIcon className="w-8 h-8" />
      </button>

      {/* Index Counter (Bottom) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
        {selectedIndex + 1} / {photos.length}
      </div>

      {/* Background Click to Close */}
      <div className="absolute inset-0 -z-10" onClick={close} />
    </div>
  );
};