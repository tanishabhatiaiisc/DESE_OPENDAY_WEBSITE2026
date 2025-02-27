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
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1739553511/Images_in_about_us_p1_b9avno.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1739553515/Images_in_about_us_p2_jsvalz.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1739553519/Images_in_about_us_p4_oh1yqx.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1739555533/Images_in_about_us_p3-min_bq9ywj.jpg",
    // "",
    
    // Event photos set 1
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514240/PXL_20240224_150317288_j6qqbv.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514238/tmp_3d0c8866-8734-4b6b-a4f9-91b2368049ff_erdfpr.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514236/DSC_0061_orsjic.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514236/DSC_0137_pv3gxi.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514236/PXL_20240224_074239282_f0v2t2.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514235/compressed_image_3_krzuvt.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514234/PXL_20240221_094748748_qio8tk.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514233/compressed_image_1_we9xhw.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514229/Media_xndii5.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514228/IMG-20240224-WA0079_edvs62.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514227/IMG-20240224-WA0021_qkra9y.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514245/DSC_0152_efplci.jpg",

    // Event photos set 2
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514253/DSC_0737_sigdt3.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514251/DSC_0771_nrvbl2.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514252/IMG_20240224_111005_cowpzm.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514250/DSC_0140_mo8jcj.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514249/DSC_0730_su3tm3.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514248/DSC_0732_lsctme.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514246/compressed_image_2_edha6h.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514244/DSC_0150_h4y118.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514258/DSC_0278_tyxp4i.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514259/DSC_0895_jrcewt.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514257/IMG_20240224_174411_graxdm.jpg",

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
