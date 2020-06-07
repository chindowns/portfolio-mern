import React from "react";
import useModal from "./useModal";
import Modal from "./modal";

let ModalContext;
let { Provider } = (ModalContext = React.createContext());

let ModalProvider = ({ children }) => {
  let { modal, handleModal, modalContent } = useModal();
  return (
    <Provider value={{ modalContent, modal, handleModal }}>
      <Modal />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };