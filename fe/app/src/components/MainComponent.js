import Menu from './MenuComponent'
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { DISHES } from '../shared/dishes';
import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './HomeComponent';

function Main(props) {
    const [selectedDishId, setselectedDishId] = useState(null);

    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={Home} />
                <Route exact path='/menu' component={() => <Menu dishes={DISHES} />} />
                <Redirect to='/home' />
                {/* <Menu dishes={DISHES} onClick={(DishId) => { setselectedDishId(DishId) }} />
            <DishDetail dish={DISHES.filter((dish) => dish.id === selectedDishId)[0]} /> */}
            </Switch>
            <Footer />
        </div>
    );
}

export default Main;
