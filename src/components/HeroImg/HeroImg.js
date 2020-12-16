import React, {useState, useEffect} from 'react';
import './HeroImg.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom';
import clienteHeroku from '../../config/prod';
export const HeroImg = () => {

const [tours, setTours] = useState([]);
    
useEffect(()=>{
    const getTours = async ()=>{
    await clienteHeroku.get("/tours")
    .then(response =>{
    setTours(response.data)
});
}
getTours();
},[]);



let toursDestacados = tours.filter(function (tour) {
  return tour.isDestacado;
});



  
    return (
      toursDestacados.length > 0 ? 
      <div className="h-25 d-inline-block heroImgCarousel">
        <Carousel className="d-md-block"
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop={true}
            showArrows={true}
            autoPlay={true} onClickItem

        >
          
          {toursDestacados.map((destacado,index) => (
            <Link to={`/tours/${destacado._id}`} key={index} className="container-fluid px-0 d-flex justify-content-center">
            <div className="row mx-0 h-25 ">
              <div className="imgCarouselContainer col-12 px-0">
                  <img src={destacado.imgD} className="imgCarousel" alt="..."></img>
                <div className="text-heroimg d-none d-sm-none d-md-none d-lg-block">
                  <h2 className="tituloHero">{destacado.title}</h2>
                </div>
              </div>
            </div>
            </Link>
          ))
          }
        </Carousel>
        </div>

         : (

        <>
        <div>
            <div className="container-fluid px-0 d-flex justify-content-center">
              <div className="row mx-0">
                <div className="col-12 px-0">
              <img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/bd-aves.appspot.com/o/DT1.jpg?alt=media&token=3e5ec858-73c5-48c5-916b-aec1243cb4d9" alt="..."></img>
              <div className="text-heroimg d-none d-sm-none d-md-none d-lg-block">
                <h2>Calilegua</h2>
                <h5>Con mas de 400 especies de Aves, en calilegua se encuentra la imponente Aguila Harpia. Su gran tamaño le permite capturar mamiferos tan grandes como monos!</h5>
              </div>
              </div>
            </div>
        </div>
        </div>
        </>
        )
    )
    
}

export default HeroImg;
