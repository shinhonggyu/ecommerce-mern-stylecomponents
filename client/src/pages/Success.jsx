// import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 15px;
  margin-top: 20px;
  background-color: teal;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const Success = () => {
  // const location = useLocation();
  // const data = location.state.data;

  //TODO
  //Create an order

  return (
    <Container>
      Successfull. Your order is being prepared...
      <Link to="/">
        <Button>Go To Homepage</Button>
      </Link>
    </Container>
  );
};

export default Success;
