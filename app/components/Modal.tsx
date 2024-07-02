import { channel } from "diagnostics_channel";
import { Children } from "react";

interface ModelProps {
    modalOpen: boolean;
    setModelOpen: (open : boolean) => boolean | void;
    children: React.ReactNode
}

const Modal: React.FC<ModelProps> = ({ modalOpen, setModelOpen, children}) => {
  return (
    <dialog id="my_modal_3" className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className="modal-box">
            <button 
                onClick={() => setModelOpen(false)} 
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
            </button>
            {children}
        </div>
    </dialog>
  )
}

export default Modal