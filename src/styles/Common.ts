import {myTheme} from "./Theme.styled";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}

export const font = ({family, weight, lineHeight, color, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Fira Code"};
    font-weight: ${weight || 400};
    color: ${color || myTheme.colors.lightGrey};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`