import logoImg from '../assets/logo.jpg'
import Button from './UI/Button';
import { useContext } from 'react';
import { CartContext } from './store/cartContext';
import { UserProgressContext } from './store/UserProgressContext';

export default function Header(){

    const cartCtx = useContext(CartContext);
    const numCartItems = cartCtx.items.reduce((totalNumOfItems, item) => {
        return totalNumOfItems + item.quantity;
    }, 0);

    const userProgressCtx = useContext(UserProgressContext);

    function handleShowCart(){
        userProgressCtx.showCart();
    }

    return(
        <>
            <div id="main-header">
                <div id="title">
                    <img src={logoImg} alt="Restaurant" />
                    <h1>Ashers Foods</h1>
                </div>
                <nav>
                    <Button textOnly onClick={handleShowCart}>Cart({numCartItems})</Button>
                </nav>
            </div> 
        </>
    );
}