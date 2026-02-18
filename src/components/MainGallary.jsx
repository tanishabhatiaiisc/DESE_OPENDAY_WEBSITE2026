import { useEffect, useRef, useState } from "react";

export default function MainGallery() {
  const scrollRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;

        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const startScrolling = () => {
      scrollInterval = setInterval(scroll, 20);
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("mouseenter", stopScrolling);
      scrollContainer.addEventListener("mouseleave", startScrolling);
      startScrolling();
    }

    return () => {
      clearInterval(scrollInterval);
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", stopScrolling);
        scrollContainer.removeEventListener("mouseleave", startScrolling);
      }
    };
  }, []);

  const images = [
    "https://res.cloudinary.com/djiey7vew/image/upload/v1771403362/tmp_146e60df-8e65-4cff-9c16-95cf20ffc474_vbsrpw.jpg",
    "https://res.cloudinary.com/djiey7vew/image/upload/v1771403359/Screenshot_2026-02-18_001639_wkpdap.png",
    "https://res.cloudinary.com/djiey7vew/image/upload/v1771403351/Screenshot_2026-02-18_000847_dh35lv.png",
    "https://res.cloudinary.com/djiey7vew/image/upload/v1771403346/IMG20250301160607_lbr6vk.jpg",
    "https://res.cloudinary.com/djiey7vew/image/upload/v1740507040/Media_nmr9cx.jpg",
    "https://res.cloudinary.com/djiey7vew/image/upload/v1740507021/DSC_0137_aeochz.jpg",
    "https://res.cloudinary.com/djiey7vew/image/upload/v1771404032/20250301_122337_acielt.jpg",
    
  ];

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-5xl p-10 sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#ececed] to-[#b584fd] animate-text-glow">
        Gallery
      </h2>
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide whitespace-nowrap"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar for Firefox and IE
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative flex-none w-64 h-40 sm:w-80 sm:h-52 md:w-96 md:h-60 transition-transform duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/20 group"
          >
            {isLoading && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
            )}
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
              onLoad={() => setIsLoading(false)}
              onError={(e) => {
                e.currentTarget.src = '/fallback-image.jpg';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
