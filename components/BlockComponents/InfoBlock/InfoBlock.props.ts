import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface InfoBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode,
    isTop?: boolean,
}
