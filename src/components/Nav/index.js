import React, {useContext }  from 'react'
import AppContext from './../../contexto/AppContext'
import Button from "./../Button"
import "./styles.scss"


function Nav() {

    const { handleCarrito } = useContext(AppContext)


    function handleClick(){
        handleCarrito()       
    }

    return(
        <div className="navContainer">
            <div className="logoContainer">
                <img className="logo" alt="logo" src="https://images.vexels.com/media/users/3/203591/isolated/preview/09b936db9b6316474b4294281d6f3dca-bamboo-lucky-plant-set-ilustraci--n-p-rpura-by-vexels.png"/>
            </div>
            <Button callback={handleClick} label="Ver carrito"/>
            {/* <button onClick={()=>handleClick()}>Ver carrito</button> */}
        </div>
    )

}

export default Nav;