import React from 'react';

export function SaveItems(props) {

    return (
        <div onClick={e => e.stopPropagation()}
             className='min-w-[500px] max-w-[50vw] max-h-[80vh] min-h-[255px] h-auto bg-[#222] rounded-md flex flex-col'>

            <div className='p-[10px] flex items-center justify-between border-b-0.5 border-white2'>
                <div className='text-[16px]'>Create Items</div>
                <div onClick={() => props?.close?.()} className='text-[14px] text-red-600 p-[4px] cursor-pointer'>X</div>
            </div>
            <div className='flex-1 flex flex-col'>

            </div>
        </div>
    );
}