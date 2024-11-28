import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './ProductCard';

function ProductSlider({ products }) {
  const settings = {
    dots: true,
    infinite: products.length > 3,
    speed: 500,
    slidesToShow: Math.min(3, products.length),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, products.length),
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="relative px-4">
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className="px-2">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlider;