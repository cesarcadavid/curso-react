import logo from './logo.svg';
import './App.css';

const Li = (prost) => {
  console.log(prost)
  return (
    <li className='clase-li'>{prost.children}</li>
  )
}

const App = () => {
  const valor = 'trizte'
  return (
    <ul className="clase-ccs">
      <Li>Valor de li</Li>
    </ul>
  );
}

export default App;
