import { useState } from "react";
import { createPortal } from "react-dom";
import OrderModal from "./OrderModal";

import React from 'react'

const OrderPortal = (props) => {
    const products = props.products;    
    const [showModal, setShowModal] = useState(false);
    const close = () => {
      setShowModal(false)
      console.log('close clicked')
    }
  return (
    <div className="orderPortal">
        <button onClick={() => setShowModal(true)}>Create Order</button>
        {showModal && createPortal(
            <OrderModal updateOrderArray={props.updateOrderArray} products={products} onClose={() => setShowModal(true)} />, document.body
        )}
    </div>
  );
}

export default OrderPortal