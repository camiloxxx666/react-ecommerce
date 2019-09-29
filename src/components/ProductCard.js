import React, { Component } from 'react'

export default class ProductCard extends Component {
    render() {
        return (
            <div>
                <div className="wrapperCard" style={wrapperCardStyle}  >
                    {/*Header*/}
                    <div style={cardHeader}>
                        <div></div>
                        <div>
                            <i className="fas fa-angle-left"></i>
                        </div>
                        <div>
                            BACK TO STORE
                        </div>
                        <div style={{textAlign:"center"}}>
                            <i className="far fa-heart"></i>
                        </div>
                    </div>
                    
                    {/*Content - Image*/}
                    <div style={cardImage} >
                        <img style={{maxWidth: "90%", maxHeight:"90%"}} 
                        src="https://pngimage.net/wp-content/uploads/2018/06/vaso-planta-png-transparente.png" alt="productImage"/>
                    </div>
                    
                    {/*Content - Data*/}
                    <div style={cardContentWrapper}>
                        <div style={cardContent} >
                            <div style={{gridColumn:"1/3"}}>
                                <h3 style={{fontSize:"19px", lineHeight:"17px", textTransform:"uppercase"}}>
                                    LEGEnd of Zelda</h3>
                            </div>
                            <div style={{gridColumn:"1/3"}}>
                                <h5 style={{fontSize:"11px", color:"#aaa"}}>CUADRO ORIGINAL</h5>
                            </div>
                            <div style={{gridColumn:"1/3"}}>
                                <h3 style={{fontSize:"20px"}}>$60</h3>
                            </div>
                            <div style={{gridColumn:"1/3"}}>
                                <p style={{fontSize:"13px", lineHeight: "15px", color:"#888"}}>
                                    Take any room to the next geek level with the classic Zelda image of Link climbing up a cliff!
                                </p>
                            </div>
                            <div>
                                <button style={cardButtons}>
                                    <span style={{fontSize:"10px"}}>AÑADIR A CARRO</span> 
                                </button>
                            </div>
                            <div>
                                <button style={cardButtons}>
                                    <span style={{fontSize:"10px"}}>WHISHLIST</span> 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const wrapperCardStyle = {
    display: "grid",
    width: "440px",
    height: "255px",
    backgroundColor: "#FFF",
    gridTemplateColumns: "46% 54%",
    gridTemplateRows: "minmax(max-content, 40px) 1fr",
    boxShadow: "-2px 3px 8px 0px rgba(163,160,163,1",
    overflow: "hidden"
}

const cardHeader = {
    gridColumn: "1/3",
    display:"grid",
    gridTemplateColumns: "15px 15px 365px 45px",
    borderBottom: "1px solid #eee",
    lineHeight: "40px",
    fontSize: "12px",
    fontFamily: "Open Sans Condensed, sans-serif",
}

const cardImage = {
    borderRight: "1px solid #EEE",
    padding: "20px 0 0 0"
}

const cardContentWrapper = {
    padding: "25px 25px 25px 20px",
    fontFamily: "Josefin Slab, serif",
}

const cardContent = {
    display: "grid",
    gridTemplateColumns: "56% 44%",
    maxWidth: "100%",
    maxHeight: "100%",
}

const cardButtons = {
    background: "transparent",
    fontSize: "1.0rem",
    border: "0.05rem solid #ddd",
    color: "#555",
    fontFamily: "Arial",
    cursor: "pointer"
}
