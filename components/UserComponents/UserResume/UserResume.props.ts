import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface UserResumeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    userId: number,
    stack: string[] | null,
    links: string[] | null,
    name: string,
    isProfile?: boolean,
}
