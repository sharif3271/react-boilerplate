import React from 'react';
import { iconNames as iName } from 'icons/index';

export type iconNames = iName;

export function Icon({name, size = 24, className = '', onClick = (e?) => {}, ...rest}: {name: iName; size?: number; className?: string; title?: string; onClick?: (e?) => void; [key: string]: any}) {
    try {
        return <img draggable={false} {...rest} onClick={onClick} title={rest.title} className={'icon-load' + (' ' + className)} width={size} height={size} src={require(`../../assets/icons/${name}.svg`)} alt={name}/>;
    } catch (e) {
        return <div draggable={false} {...rest} className='icon-not-load' title={rest.title} style={{minWidth: size, minHeight: size}}/>;
    }
}
