import './../styles/swiper.css'

import { Image } from '@chakra-ui/react'

export function CarouselTransition({ images }) {

  return (
    <section >
        {images.map((imageGroup, index) => (
            <div key={index} className='slider'>
            {imageGroup.map((imageData) => (
                <img
                className="object-fill h-48 w-48 md:h-64 md:w-64 lg:h-96 lg:w-96"
                key={imageData.id}
                src={imageData.imagen}
                alt={`Imagen ${imageData.id}`}
                />
            ))}
            </div>
        ))}
    </section>
  );
}