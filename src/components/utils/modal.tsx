import React, { ReactNode } from 'react';
import ReactDom from 'react-dom';

export function Modal(props: IModalProps) {
    return props.show ? ReactDom.createPortal(
        <div onClick={props.onClose} className={'fixed top-0 left-0 right-0 min-h-screen bg-[#0000007c] z-50 flex ' + (props.className)}>
            {props.children}
        </div>
        , document.getElementById('modal-root') as HTMLElement
    ) : null;
}

export interface IModalProps {
    children: ReactNode;
    onClose: () => void;
    className?: string;
    show: boolean;
}
