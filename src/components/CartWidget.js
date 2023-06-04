import logo from '../IMG/CARRITO.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='CartContainer'>
                <img src={logo} alt="Carrito"/>
                <p className='Cantidad'>1</p>
        </div>
    );
}

export default CartWidget;