import PropsTypes from 'prop-types';
const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
            <h2 className="text-3xl">Bottles bought: {cart.length}</h2>
            <div className="gap-3 flex flex-wrap justify-center items-center mt-5">
                {
                    cart.map(bottle=> <div key={bottle.id}>
                        <img className="w-20" src={bottle.img} alt=""/>
                        <button onClick={()=>handleRemoveFromCart(bottle.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};
Cart.propTypes = {
    cart: PropsTypes.array.isRequired,
    handleRemoveFromCart: PropsTypes.func.isRequired
}
export default Cart;