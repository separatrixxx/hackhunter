import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface UserResumeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    stack: string[] | null,
    links: string[] | null,
    name: string,
    isProfile?: boolean,
}
