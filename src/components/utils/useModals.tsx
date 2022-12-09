import React from 'react';
import { SaveItems, PageLoading, TInputData } from './modals';
import { Modal } from './modal';

const modalComponents = {
    SaveItems,
    PageLoading,
};
type TModalComponents = keyof typeof modalComponents;

export function useModals(requested: TModalComponents, props: TInputData = {}) {
    const [show, setShow] = React.useState(false);
    const MComp = React.useMemo(() => {
        return  modalComponents[requested] as unknown as React.FC<{close, data: TInputData}>;
    }, []);
    const MModal = React.useMemo(() => {
        return () => <Modal show={show} className='justify-center items-center' onClose={() => setShow(false)} ><MComp data={props} close={() => setShow(false)}/></Modal>;
    }, [show]);
    return { show: () => setShow(true), close: () => setShow(false), MModal};
}