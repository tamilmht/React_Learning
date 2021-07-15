import Menu from './MenuComponent'
import DishDetail from './DishDetailComponent';
import { Navbar, NavbarBrand } from 'reactstrap'
import { DISHES } from '../shared/dishes';
import { useState } from 'react';

function Main(props) {
    const [selectedDishId, setselectedDishId] = useState(null);

    return (
        <div>
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">This is the confusion</NavbarBrand>
                </div>
            </Navbar>
            <Menu dishes={DISHES} onClick={(DishId) => { setselectedDishId(DishId) }} />
            <DishDetail dish={DISHES.filter((dish) => dish.id === selectedDishId)[0]} />
        </div>
    );
}

export default Main;
