import React, {useContext }  from 'react'
import ProductContext from './../../contexto/ProductContext'
import Producto from "./../Producto"
import { Row, Col} from "react-bootstrap"
import "./styles.scss"


function Productos () {

    const { flores } = useContext(ProductContext) 

    return(
        <div className="productosContainer">
            <Row>
                {flores.map(flor => {             
                    const { size, id, name, image, price } = flor
                    return   (
                        <Col className="prods" md={3} key={id}>
                            <Producto name={name} image={image} price={price} size={size} />
                        </Col>
                    )}
                )} 
            </Row>
        </div>
    )
}

export default Productos;