import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { UserInterface } from '../../../interfaces/users.interface';


export interface UserItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
    user: UserInterface,
    search: string,
    scrollPosition: number,
}
