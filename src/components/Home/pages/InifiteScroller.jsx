import { useEffect, useState } from "react";
import "./infiniteScroll.css";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa";

// const initialImages = [
//   {
//     id: 1,
//     imageurl: "/assets/page-1/product-1-1.jpeg",
//     altText: "DSC_6963.JPG",
//     productName: "Hoodies",
//     herf: "/hoodies",
//   },
//   {
//     id: 2,
//     imageurl: "/assets/page-1/product-9-2.jpeg",
//     altText: "DSC_6963.JPG",
//     productName: "Zipper",
//     herf: "/zippers",
//   },
//   {
//     id: 3,
//     imageurl: "/assets/page-1/product-6-2.jpeg",
//     altText: "DSC_6963.JPG",
//     productName: "Round Neck Tees",
//     herf: "/rounded-Tshirts",
//   },
//   {
//     id: 4,
//     imageurl: "/assets/page-1/product-3-1.jpeg",
//     altText: "DSC_6963.JPG",
//     productName: "White Polo Tees",
//     herf: "/polo",
//   },
//   {
//     id: 5,
//     imageurl: "/assets/page-1/product-4-1.jpeg",
//     altText: "DSC_6963.JPG",
//     productName: "Round Neck Tees",
//     herf: "/rounded-Tshirts",
//   },
// ];

const images = [
  "/assets/wings-orginal/wings-category-1.png",
  "/assets/wings-orginal/wings-category-2.png",
  "/assets/wings-orginal/wings-category-3.png",
  "/assets/wings-orginal/wings-category-4.png",
  "/assets/wings-orginal/wings-category-5.png",
  "/assets/wings-orginal/wings-category-6.png",
];

const InfiniteScroller = () => {
  // const scrollerRef = useRef(null);

  // useEffect(() => {
  //   const scroller = scrollerRef.current;

  //   const handleMouseEnter = () => {
  //     scroller.style.animationPlayState = "paused";
  //   };

  //   const handleMouseLeave = () => {
  //     scroller.style.animationPlayState = "running";
  //   };

  //   scroller.addEventListener("mouseenter", handleMouseEnter);
  //   scroller.addEventListener("mouseleave", handleMouseLeave);

  //   return () => {
  //     scroller.removeEventListener("mouseenter", handleMouseEnter);
  //     scroller.removeEventListener("mouseleave", handleMouseLeave);
  //   };
  // }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(1);

  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth >= 1024) {
        setVisibleImages(3);
      } else if (window.innerWidth >= 768) {
        setVisibleImages(2);
      } else {
        setVisibleImages(1);
      }
    };

    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);

    return () => window.removeEventListener("resize", updateVisibleImages);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - visibleImages
        ? prevIndex + 1
        : images.length - visibleImages
    );
  };

  return (
    <>
      {/* <div className="flex justify-center items-center w-full relative overflow-hidden">
        <div ref={scrollerRef} className="scroller">
          {[...initialImages, ...initialImages].map((item, index) => (
            <Link
              key={index}
              to={item.herf}
              className="relative cursor-pointer w-[15rem] h-[24rem] sm:h-[20rem]"
            >
              <img
                className="w-full h-full object-cover"
                src={item.imageurl}
                alt={item.altText}
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent flex justify-center items-end pb-4">
                <span className="text-white text-center">
                  {item.productName}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div> */}

      <div className="relative w-full flex items-center justify-center">
        <button
          onClick={handlePrevious}
          className="absolute left-2 md:left-4 bg-gray-800 text-white p-2 rounded-full z-10 focus:outline-none"
        >
          <FaAngleLeft />
        </button>

        <div className="flex overflow-hidden w-full">
          <div
            className="flex transition-transform duration-300 h-[23rem]"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / visibleImages)
              }%)`,
            }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Carousel ${index}`}
                className="w-full h-full object-cover flex-shrink-0"
                style={{ width: `${100 / visibleImages}%` }}
              />
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-2 md:right-4 bg-gray-800 text-white p-2 rounded-full z-10 focus:outline-none"
        >
          <FaChevronRight />
        </button>
      </div>
    </>
  );
};

export default InfiniteScroller;
