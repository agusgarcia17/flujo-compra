import React, {useContext} from 'react';
import ProductContext from './../../contexto/ProductContext'
import Button from "./../Button"
import "./styles.scss";


function Producto (props) {
    const {size, image, name, price} = props

    const { addToCart } = useContext(ProductContext)

    function handleAdd(){
        addToCart(name, price)
    }

    return(
        <div className={size}>
            <div className="imgContainer">
                <img className="imagenFlor" src={image} alt={name}/> 
            </div>
            <div className="descripcion">
                <p>{name}</p>  
                <p>Precio: {price}</p>   
            </div>
            <div className="btn">
            <Button callback={()=>handleAdd(name, price)} label="Agregar a carrito"/>
            </div>
        </div>
    )

}

export default Producto;