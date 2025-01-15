import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface FiltersListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	active: boolean,
	setActive: (e: any) => void,
}
