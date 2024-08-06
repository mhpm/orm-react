// src/components/Portal.tsx
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  const modalRoot = document.getElementById('modal-root')!;
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el, modalRoot]);

  return modalRoot ? ReactDOM.createPortal(children, el) : null;
};

export default Portal;
