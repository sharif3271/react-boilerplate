import React from 'react';

export function PageLoading() {
    return (
        <div onClick={e => e.stopPropagation()} className={'fixed inset-0'}>
            <div className='w-full h-full relative flex-center'>
                <h1 className={'text-3xl text-black4'}>Loading...</h1>
            </div>
        </div>
    );
}