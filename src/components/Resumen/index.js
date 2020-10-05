import React, { useContext }  from 'react'
import ProductContext from './../../contexto/ProductContext'
import "./styles.scss"


function Resumen () {

    const { cart } = useContext(ProductContext)  
    return(
        <div className="resumenContainer">
        <p>Lista de productos: </p>
             {cart ? cart.map((item, key)=>{ 
                 if (Object.entries(item).length !== 0){
                return (
                    <li key={key}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>

                    </li>
                )}
            }): ""}
        </div>
    )

}

export default Resumen;