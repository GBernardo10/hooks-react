import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";

export interface ModalHandles {
  openModal: () => void;
}

const Modal: React.ForwardRefRenderFunction<ModalHandles> = (props, ref) => {
  const [visible, setVisible] = useState(false);

  const openModal = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  useImperativeHandle(ref, () => {
    return { openModal };
  });

  if (!visible) return null;

  return (
    <div>
      <p>MODAL</p>
      <button onClick={openModal}>Fechar modal</button>
    </div>
  );
};

export default forwardRef(Modal);
