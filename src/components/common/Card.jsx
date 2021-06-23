import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Almond_spice from "../assets/Almond_spice.png";
import chamomile_tea from "../assets/chamomile_tea.png";
import almond from "../assets/almond.png";
import chamomile from "../assets/chamomile.png";
import Earl_grey from "../assets/Earl_grey.png";
import Earl from "../assets/Earl.png";
import Hibiscus from "../assets/Hibiscus_flower.png";
import hibiscus from "../assets/hibiscus.png";
import lavender_blend from "../assets/Lavender_blend.png";
import lavender from "../assets/lavender.png";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardPopUp from "./CardPopup";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 20px;
`;


const ImageContainer = styled.div`
  height: 300px;
  width: 300px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  &:hover {
    background-image: url(${(props) => props.image});
  }
  display: flex;
  align-items: flex-end;
  -webkit-transition: background-image 0.3s ease-in-out;
  transition: background-image 0.3s ease-in-out;
`;

const View = styled.div`
  width: 300px;
  height: 50px;
  background-color: darkgray;
  opacity: 0.6;
`;

const Text = styled.h2`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin: 0;
  font-size: 16px;
  font-family: cursive;
`;

const ProductContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 0;
width: 300px;
}
`;

const ProductName = styled.h1`
  margin: 0;
  font-size: 20px;
  font-family: cursive;
`;

const Price = styled.h2`
  margin: 0;
  font-size: 18px;
  font-family: cursive;
`;

const CardConatiner = styled.div`
  padding: 10px;
  cursor: pointer;
  outline: none;
`;

const imageArray = [
  {
    mainImage: Almond_spice,
    subImage: almond,
    name: "Almond Spice",
    price: "Rs 15",
  },
  {
    mainImage: chamomile_tea,
    subImage: chamomile,
    name: "Chamomile Tea",
    price: "Rs 10",
  },
  {
    mainImage: Earl_grey,
    subImage: Earl,
    name: "Earl Grey",
    price: "Rs 12",
  },
  {
    mainImage: Hibiscus,
    subImage: hibiscus,
    name: "Hibiscus Flower",
    price: "Rs 11",
  },
  {
    mainImage: lavender_blend,
    subImage: lavender,
    name: "Almond Spice",
    price: "Rs 15",
  },
];

const nextButton = {
  fontSize: "35px",
  display: "flex",
  position: "absolute",
  top: "150px",
  zIndex: 1,
  right: 35,
  background: "white",
  borderRadius: "50%",
  cursor: "pointer",
};

const previouButton = {
  fontSize: "35px",
  display: "flex",
  position: "absolute",
  top: "150px",
  zIndex: 1,
  left: 15,
  background: "white",
  borderRadius: "50%",
  cursor: "pointer",
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <NavigateNextIcon style={nextButton} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <NavigateBeforeIcon style={previouButton} onClick={onClick} />;
}

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4.2,
  slidesToScroll: 4,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Card = () => {
  const [onHover, setHover] = React.useState(null);
  const [open, setopen] = React.useState(false);
  const inputRef = React.createRef();

  useEffect(() => {
    document.addEventListener("mousedown", () => openPopup(false), false);
    return () => {
      document.removeEventListener("mousedown", () => openPopup(false), false);
    }
  }, [])

  const openPopup = (e) => {
    setopen(e)
  }

  return (
    <Container>
      <Slider {...settings}>
        {imageArray.map((val, index) => {
          return (
            <CardConatiner>
              <ImageContainer
                id={index}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(null)}
                image={index == onHover ? val.subImage : val.mainImage}
                onClick={() => openPopup(true)}
              >
                {index == onHover && (
                  <View>
                    <Text>Quik view</Text>
                  </View>
                )}
              </ImageContainer>
              <ProductContainer>
                <ProductName>{val.name}</ProductName>
                <Price>{val.price}</Price>
              </ProductContainer>
            </CardConatiner>
          );
        })}
      </Slider>
      {!!open && <CardPopUp openPopup={openPopup} />}
    </Container>
  );
};

export default Card;
