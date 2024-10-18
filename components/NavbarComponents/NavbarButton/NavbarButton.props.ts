import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface NavbarButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
    type: 'find' | 'teams' | 'profile',
    text: string,
    link: string,
}
