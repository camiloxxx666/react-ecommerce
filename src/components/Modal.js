import React, { Component } from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../contexts/ProductContext'
import {ButtonContainer} from '../styled/Buttons'
import {Link} from 'react-router-dom'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
               {(value) => {
                   const {isModalOpen, closeModal} = value;
                   const {img, title, price} = value.modalProduct;

                   if(!isModalOpen)
                    return null;

                   else{
                       return(
                           <ModalContainer>
                               <div className="continer">
                                   <div className="row">
                                       <div id="modal" className="col-8 mx-auto p-5 col-md-6 col-lg-12 text-center text-capitalize">
                                           <h5>item added to the cart</h5>
                                           <img src={img} className="img-fluid" alt="product"/>
                                           <h5>{title}</h5>
                                           <h5 className="text-muted">Price: ${price} </h5>
                                           <Link to="/" >
                                               <ButtonContainer onClick={()=>closeModal()}>
                                                   store
                                               </ButtonContainer>
                                           </Link>
                                           <Link to="/cart" >
                                               <ButtonContainer cart onClick={()=>closeModal()}>
                                                   go to cart
                                               </ButtonContainer>
                                           </Link>
                                       </div>
                                   </div>
                               </div>
                           </ModalContainer>
                       )
                   }

               }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;

    #modal{
        background: var(--mainWhite);

    }
`