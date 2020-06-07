import { useState } from 'react';

const useModal = () => {

  const [isShowing, setIsShowing] = useState(false);
  const [modalContent, setModalContent] = useState();

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
    modalContent,
  }
};

export default useModal;
