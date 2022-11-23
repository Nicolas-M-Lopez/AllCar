import './App.css';
import NavBar from './Navbar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Mensaje de prueba"} />
    </>
  );
}

export default App;
