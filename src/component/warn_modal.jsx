import React from 'react'
import './warn_modal.css'
const Warn_modal = (prop) => {
    const { errorMessage, onClose } = prop;

    return (
      <div className="modal" style={{ display: errorMessage ? 'block' : 'none' }}>
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>Error</h2>
          <p>{errorMessage}</p>
        </div>
      </div>
    );
}

export default Warn_modal