import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../contexts/ProductContext'

export default class ProductList extends Component 
{
/* Esto está bien trae los datos de la api, se puede descomentar despues  
   constructor(){
        super()
        this.state = {
            productos: [],
            isLoading: true
        }
    }

    componentDidMount(){
        console.log("estaria funcional")
        fetch("http://localhost:8080/productosIdEjecucion/2")
        .then(response => response.json())
        .then(data => {
            this.setState({
                productos: data,
                isLoading: false
            })
        })
    } */


    state = {
        isLoading: true
    }

    componentDidMount(){
        this.setState({isLoading: false})
    }   

    render() 
    {
        return (
            <React.Fragment> 
                <div className="py-5">
                    <div className="container">
                    {this.state.isLoading ? "Cargando papo." :
                        <React.Fragment> 
                            <Title name="Nuestros" title="Productos" />
                            <div className="row">
                            <ProductConsumer>
                                {(value)=>{
                                    return value.productos.map(p =>{
                                        return <Product product={p} key={p.id} />
                                    } )      
                                } }
                                </ProductConsumer>
                            </div>
                        </React.Fragment>
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
