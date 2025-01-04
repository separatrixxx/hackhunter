import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface SearchProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: 'teams' | 'people',
    search: string,
    setSearch: (e: string) => void,
}
