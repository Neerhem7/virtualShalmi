import React from "react";
import CartItem from "./cartItem";
const Cart = ({ product, removeFromCart }) => {
    const {id, Description, salePrice}=product;
    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={id} {...item} onClick={() => removeFromCart(id)} />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <div className="cart__total">Total: {total} {currency}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Cart.propTypes = {
//     items: PropTypes.array,
//     total: PropTypes.number,
//     currency: PropTypes.string,
//     removeFromCart: PropTypes.func.isRequired
// }

export default Cart;