import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface InfoButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	onClick: (e: React.MouseEvent<HTMLDivElement>) => void,
}
