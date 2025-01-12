import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { UserInterface } from '../../interfaces/users.interface';


export interface UserPageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    user: UserInterface,
}
