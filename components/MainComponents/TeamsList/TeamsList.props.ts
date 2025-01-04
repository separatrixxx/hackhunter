import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface TeamsListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    search: string,
}
