import React, { useContext }  from 'react'
import ProductContext from './../../contexto/ProductContext'
import "./styles.scss"


function Lista () {

    const { subTotal, cart } = useContext(ProductContext)
    
    // const suma = subTotal.reduce(function(a, b){ return a + b; })

    return(
        <div className="listaContainer">
            <li>
                <p>Total de productos:  </p>
                <p>{cart.length}</p> 
            </li>
            <li>
                <p>Total a pagar:  </p>
                <p>{subTotal}</p>
            </li> 
        </div>
    )

}

export default Lista;