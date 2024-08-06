import React from 'react';
import iconSpriteDefault from '../../assets/icons/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string,
    fill?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "32"} height={props.height || "32"} viewBox={props.viewBox || "0 0 32 32"} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <use xlinkHref={ `${iconSpriteDefault}#${props.iconId}`} fill={props.fill || "#ABB2BF"}/>
        </svg>
    );
};