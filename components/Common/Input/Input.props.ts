import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    placeholder: string,
    value: string,
    type: string,
    name: string,
    ariaLabel: string,
    isArea?: boolean,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}
