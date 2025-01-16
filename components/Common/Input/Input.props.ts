import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    placeholder: string,
    value: string,
    type?: string,
    name: string,
    ariaLabel: string,
    isArea?: boolean,
    maxValue?: number,
    minValue?: number,
    handleChange: (e: any) => void;
    handleKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
}
