import React from 'react';
import iconSpriteDefault from '../../assets/icons/Style-Default.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}


export const MainIcon = ({iconId, width, height, viewBox, ...rest}: IconPropsType) => {
    return (
        <svg width={width || "53"} height={height || "53"} viewBox={viewBox || "0 0 53 53"} fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <use xlinkHref={ `${iconSpriteDefault}#${iconId}`}/>
        </svg>
    );
};

//type IconPropsType = {
//     iconId: string
//     width?: string
//     height?: string
//     viewBox?: string
//
// }
// type StyledIconPropsType ={
//     position?: string
//     objectFit?: string
// }
//
// export const MainIcon = ({iconId, width, height, viewBox, objectFit, position}: StyledIconPropsType & IconPropsType) => {
//     return (
//         <StyledSvg width={width || "53"} height={height || "53"} viewBox={viewBox || "0 0 53 53"} fill="none" xmlns="http://www.w3.org/2000/svg"
//                    position={position} objectFit={objectFit}>
//             <use xlinkHref={ `${iconSpriteDefault}#${iconId}`}/>
//         </StyledSvg>
//     );
// };
//
// const StyledSvg = styled.svg<StyledIconPropsType >`
//   object-fit: ${props => props.objectFit?? ''};
//   position: ${props => props.position?? ''};
// `