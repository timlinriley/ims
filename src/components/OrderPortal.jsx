import { useState } from "react";
import { createPortal } from "react-dom";
import OrderModal from "./OrderModal";

import React from 'react'

const OrderPortal = () => {
    const [showModal, setShowModal] = useState(false);
  return (
    <div>
        <button onClick={() => setShowModal(true)}>Create Order</button>
        {showModal && createPortal(
            <OrderModal onClose={() => setShowModal(false)} />, document.body
        )}
    </div>
  );
}

export default OrderPortal