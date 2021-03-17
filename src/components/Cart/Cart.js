import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    //console.log(price);
    
    //const total= cart.reduce((total, prod)=> total+prod.price,0);
    let total=0;
    for(let i=0; i<cart.length; i++){        
        let price=cart[i].price;
        total=price+total;
    }
    
    let shipping=0;
    if(total>35){
        shipping=0;
    }else if(total>15){
        shipping=4.99;
    }else if(total>0){
        shipping=12.99;
    }

    let tax=(total/10).toFixed(2);

    let grandTotal= (total+shipping+Number(tax));

    const formatNumber= (number)=>{
        const precision= number.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summary: {cart.length}</h4>
            <p>Item Ordered: {formatNumber(total)}</p>
            <p>Shipping Cost: {formatNumber(shipping)}</p>
            <p>Tax + VAT: {tax}</p>
            <p>Total Price: {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;