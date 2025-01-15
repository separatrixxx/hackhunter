import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface FiltersItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string,
	item: string[],
	selectedItems: string[],
	setSelectedItems: (e: string[]) => void, 
}
