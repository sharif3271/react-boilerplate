import React from 'react';
import Logo from 'src/assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { RoutesModel } from 'src/models';


export function HeaderMenu() {
    return (
        <div className='w-full min-h-[50px] bg-[#111] font-mono flex items-center px-6'>
            <img width={34} height={34} src={Logo} alt='logo' className={'mr-2'} />
            <Link className={'text-2xl text-white2'} to={(RoutesModel.home)}>Home</Link>
        </div>
    );
}
