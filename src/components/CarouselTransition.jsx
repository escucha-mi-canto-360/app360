import './../styles/swiper.css'

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