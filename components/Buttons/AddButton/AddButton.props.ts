import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface AddButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    text: string,
	onClick: (e: any) => void,
}
