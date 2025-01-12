import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { UserInterface } from '../../../interfaces/users.interface';


export interface UserMainInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    user: UserInterface,
    isProfile?: boolean,
}
