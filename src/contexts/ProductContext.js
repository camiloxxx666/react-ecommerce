import React, { Component } from 'react'
import {storeProducts, detailProduct} from '../data'

const ProductContext = React.createContext();

class ProductProvider extends Component {
    
    constructor(){
        super()
        this.state = {
            productos: [],
            detailProduct: detailProduct,
            cart: [],
            isModalOpen: false,
            modalProduct: detailProduct,
            cartSubtotal: 0,
            cartTax: 0,
            cartTotal: 0,
        }
    }

    /*Si solo se asignan la lista de productos se pasa por referencia*/
    /*Por lo tanto iteramos y copiamos cada producto, una chota*/
    /*Ahora la data no cambia, solo el estado */

    componentDidMount(){
        this.setProducts()
    }

    setProducts = () => {
        let tempProductos = [];
        storeProducts.forEach(item =>{
            const singleItem = {...item}
            tempProductos = [...tempProductos, singleItem];
        })
        this.setState(() => {
            return {productos: tempProductos}
        })
    }
    
    getItem = id =>{
        const product = this.state.productos.find(p => p.id === id)
        return product;
    }

    handleDetail = id=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct: product}
        })
    }

    addToCart = (id) =>{
        let tempProducts = [...this.state.productos];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];

        product.inCart = true;
        product.count = product.count + 1;
        product.total = product.price * product.count;

        this.setState(() => {
            return{
                products: tempProducts,
                cart: [...this.state.cart, product]
            }
        }, ()=>{
            this.addTotals();
        } )
    }

    openModal = id =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {modalProduct: product,
                    isModalOpen: true}
        })
    }

    closeModal = () =>{
        this.setState(()=>{
            return {isModalOpen: false}
        })
    }

    increment = (id) =>{
        let tempCart = [...this.state.cart];
        tempCart.map(item => {
            if(item.id === id)
            {
                item.count = item.count + 1;
                item.total = item.price * item.count;
            }
            return item;
        } )

        this.setState(() => {
            return {
                cart: tempCart
            }
        }, ()=> {
            this.addTotals();
        })
    }

    decrement = (id) =>{
        let tempCart = [...this.state.cart];
        const productDecrement = this.getItem(id)

        if(productDecrement.count > 1)
        {
            tempCart.map(item => {
                if(item.id === id)
                {
                    item.count = item.count - 1;
                    item.total = item.price * item.count;
                }
                return item;
            } )

            this.setState(() => {
                return {
                    cart: tempCart
                }
            }, ()=> {
                this.addTotals();
            })
        }

        else{
            this.removeItem(id);
        }  
    }

    removeItem = (id) =>{
        let tempProducts = [...this.state.productos];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];

        product.inCart = false;
        product.count = 0;
        product.total = 0;

        let carroTemp = [...this.state.cart].filter(prod =>{
            return prod.id !== id;
        })

        this.setState(() => {
            return{
                products: tempProducts,
                cart: carroTemp
            }
        }, ()=>{
            this.addTotals();
        } )
    }

    clearCart = () =>{
        this.setState(()=>{
            return{
                cart:[]
            }
        }, ()=>{
            //Crea una nueva copia limpia de productos es por esto que usamos copias y no modificamos el arreglo original!!!
            this.setProducts();
            this.addTotals();
        })
    }

    addTotals = () =>{
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total))
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2)); //Reduzco a dos numeros despues de la coma y lo paso a float (xq devuelve string)
        const total = subTotal + tax;

        this.setState(()=>{
            return {
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, //Paso todo el estado de frente
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }} >
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}