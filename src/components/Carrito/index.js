import React, { useContext }  from 'react'
import AppContext from './../../contexto/AppContext'
import Resumen from "./../Resumen"
import Lista from "./../Lista"
import { Row, Col} from "react-bootstrap"
import "./styles.scss"


function Carrito () {

    const { showCart } = useContext(AppContext)
    // console.log(carrito)

    return(
        
        <div className="carritoContainer">

        {showCart ? 
            <Row>
                <Col md={6}>
                    <Resumen/>   
                </Col>
                <Col md={6}>
                    <Lista/>
                 </Col>
            </Row>

            : ""        
        }
           
           
        </div>
    )

}

export default Carrito;