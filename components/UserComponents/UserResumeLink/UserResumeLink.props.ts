import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface UserResumeLinkProps extends DetailedHTMLProps<HTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
    link: string,
}
