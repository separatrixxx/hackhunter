import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	active: boolean,
	setActive: (e: any) => void,
	children: ReactNode,
}