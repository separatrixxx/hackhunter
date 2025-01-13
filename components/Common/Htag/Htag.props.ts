import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	tag: 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs',
	children: ReactNode,
	onClick?: (e: any) => void,
}
