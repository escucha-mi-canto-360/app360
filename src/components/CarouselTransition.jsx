import './../styles/swiper.css'

import { Image } from '@chakra-ui/react'

export function CarouselTransition({ images }) {

  return (
    <section >
        {images.map((imageGroup, index) => (
            <div key={index} className='slider'>
            {imageGroup.map((imageData) => (
                <img
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