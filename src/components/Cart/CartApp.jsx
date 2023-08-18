import React from "react";
import CartBody from "./CartBody";
import RedBackgroundWrap from "../inner_components_category/RedBackgroundWrap";
import Sourcing from "../inner_component_product/Sourcing/Sourcing";



function CartApp(){
return (
    <div>
        <RedBackgroundWrap />
        <CartBody />
        <Sourcing />
      
    </div>

);
}

export default CartApp;