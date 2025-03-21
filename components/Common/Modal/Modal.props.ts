import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isActive: boolean,
	setIsActive: (e: any) => void,
	children: ReactNode,
}