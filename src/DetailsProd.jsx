import React from "react";
import Slider from "react-slick";;
import "./css/DetailsProd.css";
import "./css/ProductImages.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const listItem = await fetch("https://dummyjson.com/products/1");
const singleData = await listItem.json();

const settings = {
  dots: true,
  fullWidth: true,
  centerPadding: '20px',
  autoplay: true,
  centerMode: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const DetailsProd = () => {
  return (
    <div>
      <h1>Detalhes do produto</h1>
      <div className="product-item">
        <div className="product-images">
          <Slider {...settings}>
            {singleData.images.map((image, index) => (
              <img className="product-images" src={image} key={index} />
            ))}
          </Slider>
        </div>
        <div className="product-data">
            <p><strong>ID do produto: </strong>{singleData.id}</p>
            <p><strong>Nome:</strong> {singleData.title}</p>
            <p><strong>Marca:</strong> {singleData.brand}</p>
            <p><strong>Categoria:</strong> {singleData.category}</p>
            <p><strong>Preço:</strong> R$ {singleData.price}</p>
            <p><strong>Desconto:</strong> {singleData.discountPercentage.toFixed(0)}%</p>
        </div>

      </div> 
    </div>
  );
};

export default DetailsProd;
