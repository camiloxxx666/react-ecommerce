import React, { Component } from 'react'
import {ProductConsumer} from '../contexts/ProductContext'
import {Link} from 'react-router-dom'
import {ButtonContainer} from '../styled/Buttons'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;

                    return(
                        <div className="container py-5">
                            {/*Title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/*End Title */}
                            {/*Product Info */}
                            <div className="row">
                                {/*Product image */}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} alt="productImage" className="img-fluid"/>
                                </div>
                                {/*Product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h3>model: {title} </h3>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        price: <span>$</span>
                                        {price}
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about the product: 
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    {/*Buttons */}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer disabled={inCart}>
                                                Seguir navegando
                                            </ButtonContainer>
                                        </Link> 
                                        <ButtonContainer cart
                                            onClick={()=> {value.addToCart(id); value.openModal(id)}}>
                                                {inCart ? "In Cart" : "Add to Cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                            {/*End Product Info */}
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
