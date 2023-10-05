import { useState } from 'react';

const ImageCarousel = ({ images }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="flex justify-between absolute top-1/2 left-0 right-0">
        <button
          onClick={prevImage}
          className="px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none"
        >
          Anterior
        </button>
        <button
          onClick={nextImage}
          className="px-4 py-2 bg-gray-800 text-white rounded-r-md focus:outline-none"
        >
          Siguiente
        </button>
      </div>
      <img
        src={images[currentIndex]}
        alt="Imagen"
        className="w-full h-auto"
      />
    </div>
  );
};

export default ImageCarousel;

