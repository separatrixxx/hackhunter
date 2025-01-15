import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface EditItemsProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	items: string[],
	setItems: React.Dispatch<React.SetStateAction<string[]>>,
}
