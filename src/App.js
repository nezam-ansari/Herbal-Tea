import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Header from './components/headers';
import Home from './components/home';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
`;

function App() {
  return (
    <Container>
      <Header/>
      <Home/>
      </Container>
  );
}

export default App;
