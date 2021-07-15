import Menu from './components/MenuComponent'
import { Navbar, NavbarBrand } from 'reactstrap'
import './App.css';
import { DISHES } from './shared/dishes';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">This is the confusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={DISHES} />
    </div>
  );
}

export default App;
