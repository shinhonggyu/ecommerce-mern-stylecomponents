import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import styled from 'styled-components';
import ButtonSvg from './ButtonSvg';
import { sliderItems } from '../data';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${({ slideIndex }) => slideIndex * -100}vw);
  /* background-color: cyan; */
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${({ bg }) => bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;

  #text {
    font-size: 20px;
  }

  #rect {
    stroke-dasharray: 25;
    animation: move 1s ease alternate infinite;
  }

  @keyframes move {
    100% {
      stroke-dashoffset: 50;
    }
  }
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: coral;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ direction }) => direction === 'left' && '10px'};
  right: ${({ direction }) => direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    background-color: coral;
    z-index: -1;
    animation: arrow 1.2s ease infinite;
  }

  @keyframes arrow {
    to {
      transform: scale(1.5);
      opacity: 0;
    }
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined style={{ fontSize: '50px' }} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} alt="" />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <ButtonSvg />
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined style={{ fontSize: '50px' }} />
      </Arrow>
    </Container>
  );
};

export default Slider;
