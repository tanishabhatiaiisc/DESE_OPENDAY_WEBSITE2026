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
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457588/DSC_0140_szxusd.jpg",
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457581/PXL_20240224_150317288_msltix.jpg",
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457580/PXL_20240221_094748748_yb59gh.jpg",
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457575/PXL_20240224_074239282_iqbsvq.jpg",
    // "",
    
    // Event photos set 1
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457574/DSC_0771_kviefp.jpg",
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457573/Media_axvdb1.jpg",
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457572/DSC_0895_lrjsxa.jpg",
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457572/DSC_0895_lrjsxa.jpg",
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457571/DSC_0783_rk7kd3.jpg",
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457569/IMG-20240224-WA0021_xbptqi.jpg",
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457566/DSC_0730_zodpsu.jpg",
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457565/IMG_20240224_111005_ya8six.jpg",
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457561/DSC_0737_rzmnvv.jpg",
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457561/DSC_0732_aspmtk.jpg",
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457557/DSC_0278_blzdky.jpg",

    // Event photos set 2
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457555/DSC_0137_ipa4td.jpg",
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457548/DSC_0152_ikb0ej.jpg",
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457548/DSC_0150_holhfg.jpg",
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457546/compressed_image_3_jp9nyk.jpg",
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457540/compressed_image_2_gohhlu.jpg",
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457536/compressed_image_1_ppavuq.jpg",
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457536/DSC_0061_bl7gm1.jpg",
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
