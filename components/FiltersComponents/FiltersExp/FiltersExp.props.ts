import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface FiltersExpProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    from: number,
    to: number,
    minFrom: number,
    maxTo: number,
    setFrom: (e: number) => void,
    setTo: (e: number) => void,
}
