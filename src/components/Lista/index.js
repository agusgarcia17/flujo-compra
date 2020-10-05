import React, { useContext }  from 'react'
import ProductContext from './../../contexto/ProductContext'
import "./styles.scss"


function Lista () {

    const { subTotal } = useContext(ProductContext)
    
    // const suma = subTotal.reduce(function(a, b){ return a + b; })

    return(
        <div className="listaContainer">
            <li>
                <p>Total de productos:  </p>
                <p>{subTotal.length}</p> 
            </li>
            <li>
                <p>Total a pagar:  </p>
                <p>{subTotal.length > 0 ? subTotal.reduce(function(a, b){ return a + b; }) : 0}</p>
            </li> 
        </div>
    )

}

export default Lista;