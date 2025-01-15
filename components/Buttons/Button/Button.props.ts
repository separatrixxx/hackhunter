import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string,
    type: 'primary' | 'white',
    isLoading?: boolean,
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}
