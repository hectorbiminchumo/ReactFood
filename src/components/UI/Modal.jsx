import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'

function Modal({children, open, className=''}) {
    const dialog = useRef()
    
    useEffect(() => {
        const modal = dialog.current;
        if (open) {
            modal.showModal();
        }

        return () => modal.close();
    },[open])

  return ReactDOM.createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>{children}</dialog>,
    document.getElementById('modal')
  );
}

export default Modal