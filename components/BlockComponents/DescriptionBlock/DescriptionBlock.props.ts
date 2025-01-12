import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface DescriptionBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    description: string,
}
