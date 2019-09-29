import React from 'react'

export default function CartItem({item, value}) { //Aca podria decir props y nada mas, pero extraigo de las props los dos valores que me interesan

    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
    return (

        <div className="row my-2 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img src={img} alt="cartProduct" style={{width: '5rem', height:'5rem'}} className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">Product: </span>
                    {title}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">Price: </span>
                    {price}
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div>
                            <span onClick={() => decrement(id)} className="btn btn-black mx-1">
                                -
                            </span>
                            <span  className="btn btn-black mx-1">
                                {count}
                            </span>
                            <span onClick={() => increment(id)} className="btn btn-black mx-1">
                                +
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <div className="cart-icon" onClick={() => removeItem(id)} >
                        <i className="fas fa-trash"></i>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <strong>item total: ${total}</strong>
                </div>
        </div>
    )
}
