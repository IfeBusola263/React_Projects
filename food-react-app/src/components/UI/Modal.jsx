import { createPortal } from "react-dom";
import { forwardRef, useRef, useEffect } from "react";

function Modal({ children, open, className = "" , onClose}) {
  const dialog = useRef();
  const modal = dialog.current;

  useEffect(() => {
    if (open) {
      modal.showModal();
    }

    return () => {
      if (modal) {
        modal.close();
      }
    };
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
