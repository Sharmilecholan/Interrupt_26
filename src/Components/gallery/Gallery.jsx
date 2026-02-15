import '@splidejs/splide/dist/css/splide.min.css';
import 'lightbox2/dist/css/lightbox.min.css';
import React, { useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import gallery_det from "../../data/images.json"; 
import "../../Styles/gallery.css";

const Gallery = () => {
  // Accessing both arrays from the JSON
  const images23 = gallery_det.interrupt23;
  const images25 = gallery_det.interrupt25;

  const splide23Ref = useRef(null);
  const splide25Ref = useRef(null);

  const handleThumbnailClick = (ref, index) => {
    if (ref.current) {
      ref.current.splide.go(index);
    }
  };

  // Shared options for both carousels
  const splideOptions = {
    type: 'loop',
    perPage: 3,
    gap: '1rem',
    autoplay: true,
    interval: 3000,
    pauseOnHover: false,
    arrows: true,
    pagination: true,
    drag: true,
    breakpoints: {
      1024: { perPage: 2 },
      768: { perPage: 1 },
    },
  };

  return (
    <div className='gallery'>
      {/* --- INTERRUPT '25 SECTION (NEW) --- */}
      <h1>INTERRUPT '25</h1>
      <Splide ref={splide25Ref} options={splideOptions}>
        {images25.map((image, index) => (
          <SplideSlide key={index}>
            <a href={image.url} data-lightbox="gallery25">
              <img src={image.url} alt={`Interrupt 25 Image ${index}`} />
            </a>
            {/* No caption div here */}
          </SplideSlide>
        ))}
      </Splide>

      <div className="thumbnail-nav">
        {images25.map((image, index) => (
          <img
            src={image.thumbnail}
            alt={`Thumbnail 25 ${index + 1}`}
            key={index}
            onClick={() => handleThumbnailClick(splide25Ref, index)}
            className="thumb-img"
          />
        ))}
      </div>

      <div className="section-divider" style={{ margin: '50px 0' }} />

      {/* --- INTERRUPT '23 SECTION (EXISTING) --- */}
      <h1>INTERRUPT '23</h1>
      <Splide ref={splide23Ref} options={splideOptions}>
        {images23.map((image, index) => (
          <SplideSlide key={index}>
            <a href={image.url} data-lightbox="gallery23" data-title={image.caption}>
              <img src={image.url} alt={image.caption} />
            </a>
            <div className="caption">{image.caption}</div>
          </SplideSlide>
        ))}
      </Splide>

      <div className="thumbnail-nav">
        {images23.map((image, index) => (
          <img
            src={image.thumbnail}
            alt={`Thumbnail 23 ${index + 1}`}
            key={index}
            onClick={() => handleThumbnailClick(splide23Ref, index)}
            className="thumb-img"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;