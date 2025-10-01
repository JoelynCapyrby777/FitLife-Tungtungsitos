import React, { createContext, useState, useContext, type ReactNode } from 'react';
import { Modal } from '../components/ui';
// 👇 CAMBIO: La ruta ahora es más lógica, ya que el formulario es un componente.
import PhysicalDataForm from '../components/forms/PhysicalDataForm/PhysicalDataForm';

// Define los tipos de modales que puede haber en tu app
type ModalType = 'physicalData' | null;

interface ModalContextType {
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modalType, setModalType] = useState<ModalType>(null);

  const openModal = (type: ModalType) => setModalType(type);
  const closeModal = () => setModalType(null);

  const renderModalContent = () => {
    switch (modalType) {
      case 'physicalData':
        return <PhysicalDataForm onSave={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal 
        isOpen={!!modalType} 
        onClose={closeModal}
        title={modalType === 'physicalData' ? "Registro de Datos Físicos" : ""}
      >
        {renderModalContent()}
      </Modal>
    </ModalContext.Provider>
  );
};

// Hook personalizado para usar el contexto fácilmente
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal debe ser usado dentro de un ModalProvider');
  }
  return context;
};
