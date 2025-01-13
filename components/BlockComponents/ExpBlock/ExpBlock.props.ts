import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ExpBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    exp: number | null,
}
