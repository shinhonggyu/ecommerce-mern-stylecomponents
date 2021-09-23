import { SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components';

const Info = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  transition: all 0.5s ease;
  cursor: pointer;

  /* &:hover {
    opacity: 1;
  } */
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 287px;
  height: 350px;
  background-color: #f5fbfd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  object-fit: cover;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Heart = styled.img`
  width: 22px;
  height: 22px;
  animation: beat 0.7s linear infinite;

  @keyframes beat {
    0%,
    100% {
      transform: scale(1);
    }

    25% {
      transform: rotate(2deg);
    }

    30% {
      transform: scale(1.3);
    }

    50% {
      transform: scale(1.2);
    }

    70% {
      transform: scale(1.3);
    }
  }
`;

const Product = ({ img }) => {
  return (
    <Container>
      <Circle />
      <Image src={img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <Heart src="./assets/heart.png" />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
