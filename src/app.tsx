import React, { FormEvent, useCallback, useEffect, useRef } from "react";
import Input from "./components/input";
import Modal, { ModalHandles } from "./components/modal";

export default function App() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<ModalHandles>(null);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
  }, []);

  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal();
  }, []);

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input ref={nameInputRef} name="name" label="Nome Completo" />
        <button type="submit">Enviar</button>
      </form>

      <button onClick={handleOpenModal}>abrir modal</button>

      <Modal ref={modalRef} />
    </>
  );
}
