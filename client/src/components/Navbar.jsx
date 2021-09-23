import styled from 'styled-components';
import Logo from './Logo';
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined, Search } from '@material-ui/icons';

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 1px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  /* display: flex;
  justify-content: center;
  align-items: center; */

  #rect {
    stroke-dasharray: 780;
    stroke-dashoffset: 0;
    animation: moveRect 3s ease alternate infinite;
  }

  @keyframes moveRect {
    to {
      stroke-dashoffset: 780;
    }
  }

  #circle {
    stroke-dasharray: 540;
    stroke-dashoffset: 0;
    fill: white;
    animation: moveCircle 3s ease alternate infinite;
  }

  @keyframes moveCircle {
    100% {
      stroke-dashoffset: 540;
      fill: #12741c;
    }
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: 'gray', fontSize: '16px' }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo />
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
